import {Relationshipattribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelationshipattributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Relationshipattribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Relationshipattribute();
}
