import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function EmbeddedReport({reportId, embedUrl}) {
	return (
		<>
			<PowerBIEmbed
				embedConfig = {{
					type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
					id: reportId, // Report ID
					embedUrl: embedUrl, // Embed URL 
					// accessToken: embedToken, // Access token
					tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
					settings: {
						panes: {
							filters: {
								expanded: false,
								visible: false
							}
						},
						background: models.BackgroundType.Transparent,
					}
				}}

				eventHandlers = {
					new Map([
						['loaded', function () {console.log('Report loaded');}],
						['rendered', function () {console.log('Report rendered');}],
						['error', function (event) {console.log(event.detail);}],
						['visualClicked', () => console.log('visual clicked')],
						['pageChanged', (event) => console.log(event)],
					])
				}

				cssClassName = { "report-container" }

				getEmbeddedComponent = { (embeddedReport) => {
					window.Report = embeddedReport;
				}}
			/>
		</>
	);
}

export default EmbeddedReport;