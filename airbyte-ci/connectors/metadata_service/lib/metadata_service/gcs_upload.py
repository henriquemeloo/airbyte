#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#
from pathlib import Path
from typing import Tuple

import yaml
from google.cloud import storage
from google.oauth2 import service_account
from metadata_service.models.generated.ConnectorMetadataDefinitionV1 import ConnectorMetadataDefinitionV1


def upload_metadata_to_gcs(bucket_name: str, metadata_file_path: Path, service_account_file_path: Path) -> Tuple[bool, str]:
    """Upload a metadata file to a GCS bucket.

    If the per 'version' key already exists it won't be overwritten.
    Also updates the 'latest' key on each new version.

    Args:
        bucket_name (str): Name of the GCS bucket to which the metadata file will be uploade.
        metadata_file_path (Path): Path to the metadata file.
        service_account_file_path (Path): Path to the JSON file with the service account allowed to read and write on the bucket.
    Returns:
        Tuple[bool, str]: Whether the metadata file was uploaded and its blob id.
    """
    uploaded = False
    raw_metadata = yaml.safe_load(metadata_file_path.read_text())
    metadata = ConnectorMetadataDefinitionV1.parse_obj(raw_metadata)

    credentials = service_account.Credentials.from_service_account_file(service_account_file_path)
    storage_client = storage.Client(credentials=credentials)
    bucket = storage_client.bucket(bucket_name)

    version_blob = bucket.blob(f"metadata/{metadata.data.dockerRepository}/{metadata.data.dockerImageTag}/metadata.yaml")
    latest_blob = bucket.blob(f"metadata/{metadata.data.dockerRepository}/latest/metadata.yaml")
    if not version_blob.exists():
        version_blob.upload_from_filename(str(metadata_file_path))
        uploaded = True
    if version_blob.etag != latest_blob.etag:
        latest_blob.upload_from_filename(str(metadata_file_path))
    return uploaded, version_blob.id
