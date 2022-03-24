import {Msfp_satisfactionmetric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_satisfactionmetricFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_satisfactionmetric {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_satisfactionmetric();
}
