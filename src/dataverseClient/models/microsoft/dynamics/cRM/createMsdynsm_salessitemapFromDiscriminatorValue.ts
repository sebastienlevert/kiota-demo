import {Msdynsm_salessitemap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdynsm_salessitemapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdynsm_salessitemap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdynsm_salessitemap();
}
