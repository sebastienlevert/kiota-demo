import {Sharepointsite} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointsiteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sharepointsite {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sharepointsite();
}
