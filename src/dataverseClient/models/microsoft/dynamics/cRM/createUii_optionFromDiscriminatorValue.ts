import {Uii_option} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_optionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_option {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_option();
}
