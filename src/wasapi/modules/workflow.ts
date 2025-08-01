import { AxiosClient } from "../client";
import { WorkflowStatuses } from "../models/workflow.model";

export class WorkflowModule {
    constructor(private client: AxiosClient) { }

    // GET https://api-ws.wasapi.io/api/v1/workflow-statuses?action={action}&phone={phone}&agent_id={agent_id}&dates={dates}&per_page={per_page}&page={page}    obtener los estados de los flujos de trabajo
    async getStatuses(params: WorkflowStatuses): Promise<any> {
        try {
            const response = await this.client.get(`/workflow-statuses?action=${params.action}&phone=${params.phone}&agent_id=${params.agent_id}&dates=${params.dates}&per_page=${params.per_page}&page=${params.page}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error al cargar los flujos de trabajo:', error);
            throw error;
        }
    }
}