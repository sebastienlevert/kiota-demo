import {Principalobjectattributeaccess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalobjectattributeaccessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Principalobjectattributeaccess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Principalobjectattributeaccess();
}
