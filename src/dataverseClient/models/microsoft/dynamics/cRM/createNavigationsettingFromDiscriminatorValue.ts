import {Navigationsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNavigationsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Navigationsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Navigationsetting();
}
