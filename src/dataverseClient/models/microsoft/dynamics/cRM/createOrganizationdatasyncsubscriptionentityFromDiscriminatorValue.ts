import {Organizationdatasyncsubscriptionentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Organizationdatasyncsubscriptionentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Organizationdatasyncsubscriptionentity();
}
