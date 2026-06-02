import { apiClient } from './client.js';

export async function getServices(){
    const response = await apiClient.get('/services/');
    return response.data
}


export async function getServiceBySlug(slug) {
  const response = await apiClient.get(`/services/${slug}/`);
  return response.data;
}

// <ul class="ai-protocol-list__grid">
        // <li class="ai-protocol-list__item ai-protocol-list__item--accounting" id="ai-accounting">
        //   <h3 class="protocolButton" data-page="aiaccounting">AI Accounting</h3>
        // </li>

        // <li class="ai-protocol-list__item ai-protocol-list__item--marketing" id="ai-marketing">
        //   <h3 class="protocolButton" data-page="aimarketingdesign">AI Marketing &amp; Design</h3>
        // </li>

        // <li class="ai-protocol-list__item ai-protocol-list__item--crm" id="crm-intelligence">
        //   <h3 class="protocolButton" data-page="crmintelligence">CRM Intelligence</h3>
        // </li>

        // <li class="ai-protocol-list__item ai-protocol-list__item--operations" id="operations-automation">
        //   <h3 class="protocolButton" data-page="operationsautomation">Operations Automation</h3>
        // </li>

        // <li class="ai-protocol-list__item ai-protocol-list__item--analytics" id="business-analytics">
        //   <h3 class="protocolButton" data-page="businessanalyticsaiauditor">Business Analytics &amp; AI Auditor</h3>
        // </li>
      // </ul>