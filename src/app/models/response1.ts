import { Meta } from './meta';
import { Links } from './links';
import { Data } from './data';
export interface Response1 {
    data: Data[];
    links: Links;
    meta: Meta;
}
