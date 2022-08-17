import React from 'react';
import styled from 'styled-components';
import DatasetLabel from 'components/common/dataset-label';
import {FormattedMessage} from 'localization';

const StyledMsg = styled.div`
  margin-top: 24px;
  overflow-wrap: break-word;
`;

export const RefreshDatasetModal = ({dataset, layers = []}) => {
  // retrieve only layers related to the current dataset
  const currDatasetLayers = layers.filter(layer => layer.config.dataId === (dataset && dataset.id));
  const connection = dataset.metadata ? dataset.metadata.connection : {};

  return (
    <div className="delete-dataset-modal">
      <DatasetLabel dataset={dataset} />
      <StyledMsg className="delete-dataset-msg">
        <FormattedMessage
          id={'modal.refreshData.warning'}
          values={{length: currDatasetLayers.length}}
        />
        <p>Database Connection:</p>
        <p>{connection.connectionName}</p>
      </StyledMsg>
    </div>
  );
};

const RefreshDatasetModalFactory = () => RefreshDatasetModal;
export default RefreshDatasetModalFactory;
