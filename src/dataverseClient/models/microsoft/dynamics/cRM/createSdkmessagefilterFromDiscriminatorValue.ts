import {Sdkmessagefilter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSdkmessagefilterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sdkmessagefilter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sdkmessagefilter();
}
