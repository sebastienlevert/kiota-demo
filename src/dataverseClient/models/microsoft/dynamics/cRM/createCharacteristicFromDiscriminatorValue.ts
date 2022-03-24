import {Characteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Characteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Characteristic();
}
