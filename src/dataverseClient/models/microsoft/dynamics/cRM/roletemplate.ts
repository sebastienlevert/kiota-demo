import {createPrivilegeFromDiscriminatorValue} from './createPrivilegeFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {Crmbaseentity, Privilege, Role} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Roletemplate extends Crmbaseentity implements Parsable {
    private _name?: string | undefined;
    private _role_template_roles?: Role[] | undefined;
    private _roletemplateid?: string | undefined;
    private _roletemplateprivileges_association?: Privilege[] | undefined;
    /**
     * Instantiates a new roletemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "name": (o, n) => { (o as unknown as Roletemplate).name = n.getStringValue(); },
            "role_template_roles": (o, n) => { (o as unknown as Roletemplate).role_template_roles = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "roletemplateid": (o, n) => { (o as unknown as Roletemplate).roletemplateid = n.getStringValue(); },
            "roletemplateprivileges_association": (o, n) => { (o as unknown as Roletemplate).roletemplateprivileges_association = n.getCollectionOfObjectValues<Privilege>(createPrivilegeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the role_template_roles property value. 
     * @returns a role
     */
    public get role_template_roles() {
        return this._role_template_roles;
    };
    /**
     * Sets the role_template_roles property value. 
     * @param value Value to set for the role_template_roles property.
     */
    public set role_template_roles(value: Role[] | undefined) {
        this._role_template_roles = value;
    };
    /**
     * Gets the roletemplateid property value. 
     * @returns a string
     */
    public get roletemplateid() {
        return this._roletemplateid;
    };
    /**
     * Sets the roletemplateid property value. 
     * @param value Value to set for the roletemplateid property.
     */
    public set roletemplateid(value: string | undefined) {
        this._roletemplateid = value;
    };
    /**
     * Gets the roletemplateprivileges_association property value. 
     * @returns a privilege
     */
    public get roletemplateprivileges_association() {
        return this._roletemplateprivileges_association;
    };
    /**
     * Sets the roletemplateprivileges_association property value. 
     * @param value Value to set for the roletemplateprivileges_association property.
     */
    public set roletemplateprivileges_association(value: Privilege[] | undefined) {
        this._roletemplateprivileges_association = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<Role>("role_template_roles", this.role_template_roles);
        writer.writeStringValue("roletemplateid", this.roletemplateid);
        writer.writeCollectionOfObjectValues<Privilege>("roletemplateprivileges_association", this.roletemplateprivileges_association);
    };
}
