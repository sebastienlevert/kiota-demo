import {Recurrencerule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrenceruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Recurrencerule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Recurrencerule();
}
