import {BooleanManagedProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBooleanManagedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BooleanManagedProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BooleanManagedProperty();
}
