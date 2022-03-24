import {Msdynsm_marketingsitemap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdynsm_marketingsitemapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdynsm_marketingsitemap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdynsm_marketingsitemap();
}
