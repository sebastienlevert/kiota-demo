import {Msdynce_botcontent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdynce_botcontentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdynce_botcontent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdynce_botcontent();
}
