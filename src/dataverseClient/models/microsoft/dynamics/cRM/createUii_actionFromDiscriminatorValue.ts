import {Uii_action} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_actionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_action {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_action();
}
