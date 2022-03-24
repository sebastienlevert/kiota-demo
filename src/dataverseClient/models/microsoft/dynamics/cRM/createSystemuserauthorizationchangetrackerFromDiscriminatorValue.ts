import {Systemuserauthorizationchangetracker} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSystemuserauthorizationchangetrackerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Systemuserauthorizationchangetracker {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Systemuserauthorizationchangetracker();
}
