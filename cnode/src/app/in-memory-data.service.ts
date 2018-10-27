
import { Hero } from './hero'
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService extends InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nicesd4545f' },
            { id: 12, name: 'Narco43' },
            { id: 13, name: 'Bombasto3453' },
            { id: 14, name: 'Celeritas4345' },
            { id: 15, name: 'Magneta433' },
            { id: 16, name: 'RubberMan43' },
            { id: 17, name: 'Dynama4353' },
            { id: 18, name: 'Dr IQ435' },
            { id: 19, name: 'Magma4343' },
            { id: 20, name: 'Tornado45345' }
        ];
        return { heroes };
    }
    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
    }
}
