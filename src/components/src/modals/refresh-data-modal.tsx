import React from 'react';
import styled from 'styled-components';
import DatasetLabel from '../common/dataset-label';
import {FormattedMessage} from '@kepler.gl/localization';
import {Layer} from '@kepler.gl/layers';
import {KeplerTable} from '@kepler.gl/table';

const StyledMsg = styled.div`
  margin-top: 24px;
  overflow-wrap: break-word;
`;

export interface RefreshDatasetModalProps {
  dataset: KeplerTable;
  layers: Layer[];
}

export const RefreshDatasetModal: React.FC<RefreshDatasetModalProps> = ({dataset, layers = []}) => {
  // retrieve only layers related to the current dataset
  const currDatasetLayers = layers.filter(layer => layer.config.dataId === (dataset && dataset.id));
  const connection = dataset.metadata?.connection;

  return (
    <div className="delete-dataset-modal">
      <DatasetLabel dataset={dataset} />
      <StyledMsg className="delete-dataset-msg">
        <FormattedMessage
          id={'modal.refreshData.warning'}
          values={{length: currDatasetLayers.length}}
        />
        <p>Database Connection:</p>
        <p>{connection?.connectionName ?? 'No database'}</p>
      </StyledMsg>
    </div>
  );
};

const RefreshDatasetModalFactory = () => RefreshDatasetModal;
export default RefreshDatasetModalFactory;
