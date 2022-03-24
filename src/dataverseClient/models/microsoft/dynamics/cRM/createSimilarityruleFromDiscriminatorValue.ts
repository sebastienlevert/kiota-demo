import {Similarityrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSimilarityruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Similarityrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Similarityrule();
}
