export class Task implements ITask {
	description: string;

	createdAt: string;

	constructor(description: string) {
		this.description = description;
		this.createdAt = new Date().toISOString();
	}
}
