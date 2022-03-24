import {Organizationdatasyncsubscription} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationdatasyncsubscriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Organizationdatasyncsubscription {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Organizationdatasyncsubscription();
}
