export class Tag {
    // Sample
    //{"id":"5e1be48fd697f753a4758e62","name":"201912_MDE","name_seo":"201912_MDE"},{"id":"516827a7581c2d6f6b000001","name":"Art \u0026 Entertainment","name_seo":"entertainment"}
    id: string = '';
    name: string = '';
    nameSeo: string = '';

    static fromJson(obj: object): Tag {
        const tag = new Tag();
        tag.id = obj['id'] || ''
        tag.name = obj['name'] || '';
        tag.nameSeo = obj['name_seo'] || '';
        return tag;
    }

    toJson(): object {
        return {
            id: this.id || '',
            name: this.name || '',
            name_seo: this.nameSeo || ''
        };
    }
}
