import {Msdyusd_form} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_formFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_form {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_form();
}
