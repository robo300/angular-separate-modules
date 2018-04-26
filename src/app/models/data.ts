import { Links2 } from './links2';
import { Relationships } from './relationships';
import { Attributes } from './attributes';
export interface Data {
    type: string;
    id: string;
    attributes: Attributes;
    relationships: Relationships;
    links: Links2;
}
