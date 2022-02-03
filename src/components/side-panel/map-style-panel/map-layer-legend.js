import React from 'react';
import styled from 'styled-components';
import {PanelLabel, PanelLabelBold} from 'components/common/styled-components';

const StyledInteractionPanel = styled.div`
  padding-bottom: 12px;
`;

const StyledLegendPanel = styled.div`
  padding: 12px;
  background-color: ${props => props.theme.panelBackground};
`;

const StyledLegendItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendImage = styled.img`
  width: 80px;
`;

const LayerLabel = styled(PanelLabelBold)`
  color: ${props => props.theme.textColor};
`;

MapLayerLegendFactory.deps = [];

function MapLayerLegendFactory() {
  const legendId = legend => (legend.title || legend.subheader).replace(' ', '-');

  const LayerMapLegend = ({legendList = []}) => (
    <StyledInteractionPanel>
      <div className="layer-legend__header">
        <PanelLabel>Map Legend</PanelLabel>
      </div>
      <StyledLegendPanel className="map-style__layer-legend">
        {legendList.map(legend => (
          <StyledLegendItem className="layer-legend__select" key={legendId(legend)}>
            {legend.img && <LegendImage src={legend.img} />}
            <LayerLabel>{legend.title || legend.subheader}</LayerLabel>
          </StyledLegendItem>
        ))}
      </StyledLegendPanel>
    </StyledInteractionPanel>
  );
  return LayerMapLegend;
}

export default MapLayerLegendFactory;
