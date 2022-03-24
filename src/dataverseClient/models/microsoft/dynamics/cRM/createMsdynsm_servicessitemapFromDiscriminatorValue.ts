import {Msdynsm_servicessitemap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdynsm_servicessitemapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdynsm_servicessitemap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdynsm_servicessitemap();
}
