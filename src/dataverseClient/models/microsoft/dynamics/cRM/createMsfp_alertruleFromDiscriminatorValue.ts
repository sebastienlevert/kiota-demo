import {Msfp_alertrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_alertruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_alertrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_alertrule();
}
