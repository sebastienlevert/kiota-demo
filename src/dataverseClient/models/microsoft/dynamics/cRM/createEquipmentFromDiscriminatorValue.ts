import {Equipment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEquipmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Equipment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Equipment();
}
