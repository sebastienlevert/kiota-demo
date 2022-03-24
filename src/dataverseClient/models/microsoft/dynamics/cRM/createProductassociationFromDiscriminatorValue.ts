import {Productassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Productassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Productassociation();
}
