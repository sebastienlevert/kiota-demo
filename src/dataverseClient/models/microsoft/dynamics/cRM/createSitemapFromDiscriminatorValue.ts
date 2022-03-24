import {Sitemap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSitemapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sitemap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sitemap();
}
