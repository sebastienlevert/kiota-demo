import {Contracttemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContracttemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contracttemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contracttemplate();
}
