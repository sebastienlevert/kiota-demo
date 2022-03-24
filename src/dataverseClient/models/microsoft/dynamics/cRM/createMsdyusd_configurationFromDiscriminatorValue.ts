import {Msdyusd_configuration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_configurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_configuration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_configuration();
}
