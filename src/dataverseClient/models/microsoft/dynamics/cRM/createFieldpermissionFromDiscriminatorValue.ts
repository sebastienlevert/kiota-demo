import {Fieldpermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFieldpermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fieldpermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fieldpermission();
}
