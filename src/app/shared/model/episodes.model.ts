export interface IEpisode {
    id: number;
    airdate?: string;
    airstamp?: string;
    airtime?: string;
    image?: any;
    name?: string;
    number?: number;
    runtime?: number;
    season?: number;
    summary?: string;
    url?: string;
}

export class Episode implements IEpisode {
    constructor(
        public id: number,
        public airdate?: string,
        public airstamp?: string,
        public airtime?: string,
        public image?: string,
        public name?: string,
        public number?: number,
        public runtime?: number,
        public season?: number,
        public summary?: string,
        public url?: string
    ) {
    }
}
