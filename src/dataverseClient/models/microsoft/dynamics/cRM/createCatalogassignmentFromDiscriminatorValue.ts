import {Catalogassignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCatalogassignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Catalogassignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Catalogassignment();
}
