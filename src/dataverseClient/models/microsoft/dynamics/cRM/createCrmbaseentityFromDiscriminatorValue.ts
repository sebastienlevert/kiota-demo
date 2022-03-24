import {Crmbaseentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrmbaseentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Crmbaseentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Crmbaseentity();
}
