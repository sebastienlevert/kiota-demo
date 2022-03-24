import {Systemform} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSystemformFromDiscriminatorValue(parseNode: ParseNode | undefined) : Systemform {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Systemform();
}
