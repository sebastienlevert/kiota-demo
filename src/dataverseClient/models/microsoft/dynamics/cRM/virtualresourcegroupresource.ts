import {createConstraintbasedgroupFromDiscriminatorValue} from './createConstraintbasedgroupFromDiscriminatorValue';
import {Constraintbasedgroup, Crmbaseentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Virtualresourcegroupresource extends Crmbaseentity implements Parsable {
    private __resourcegroupid_value?: string | undefined;
    private _businessunit?: string | undefined;
    private _constraintbasedgroupid?: string | undefined;
    private _name?: string | undefined;
    private _resourceentitylogicalname?: string | undefined;
    private _resourceentityname?: string | undefined;
    private _resourcegroupId?: Constraintbasedgroup | undefined;
    private _virtualresourcegroupresourceid?: string | undefined;
    /**
     * Gets the _resourcegroupid_value property value. 
     * @returns a string
     */
    public get _resourcegroupid_value() {
        return this.__resourcegroupid_value;
    };
    /**
     * Sets the _resourcegroupid_value property value. 
     * @param value Value to set for the _resourcegroupid_value property.
     */
    public set _resourcegroupid_value(value: string | undefined) {
        this.__resourcegroupid_value = value;
    };
    /**
     * Gets the businessunit property value. 
     * @returns a string
     */
    public get businessunit() {
        return this._businessunit;
    };
    /**
     * Sets the businessunit property value. 
     * @param value Value to set for the businessunit property.
     */
    public set businessunit(value: string | undefined) {
        this._businessunit = value;
    };
    /**
     * Gets the constraintbasedgroupid property value. 
     * @returns a string
     */
    public get constraintbasedgroupid() {
        return this._constraintbasedgroupid;
    };
    /**
     * Sets the constraintbasedgroupid property value. 
     * @param value Value to set for the constraintbasedgroupid property.
     */
    public set constraintbasedgroupid(value: string | undefined) {
        this._constraintbasedgroupid = value;
    };
    /**
     * Instantiates a new virtualresourcegroupresource and sets the default values.
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
            "_resourcegroupid_value": (o, n) => { (o as unknown as Virtualresourcegroupresource)._resourcegroupid_value = n.getStringValue(); },
            "businessunit": (o, n) => { (o as unknown as Virtualresourcegroupresource).businessunit = n.getStringValue(); },
            "constraintbasedgroupid": (o, n) => { (o as unknown as Virtualresourcegroupresource).constraintbasedgroupid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Virtualresourcegroupresource).name = n.getStringValue(); },
            "resourceentitylogicalname": (o, n) => { (o as unknown as Virtualresourcegroupresource).resourceentitylogicalname = n.getStringValue(); },
            "resourceentityname": (o, n) => { (o as unknown as Virtualresourcegroupresource).resourceentityname = n.getStringValue(); },
            "resourcegroupId": (o, n) => { (o as unknown as Virtualresourcegroupresource).resourcegroupId = n.getObjectValue<Constraintbasedgroup>(createConstraintbasedgroupFromDiscriminatorValue); },
            "virtualresourcegroupresourceid": (o, n) => { (o as unknown as Virtualresourcegroupresource).virtualresourcegroupresourceid = n.getStringValue(); },
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
     * Gets the resourceentitylogicalname property value. 
     * @returns a string
     */
    public get resourceentitylogicalname() {
        return this._resourceentitylogicalname;
    };
    /**
     * Sets the resourceentitylogicalname property value. 
     * @param value Value to set for the resourceentitylogicalname property.
     */
    public set resourceentitylogicalname(value: string | undefined) {
        this._resourceentitylogicalname = value;
    };
    /**
     * Gets the resourceentityname property value. 
     * @returns a string
     */
    public get resourceentityname() {
        return this._resourceentityname;
    };
    /**
     * Sets the resourceentityname property value. 
     * @param value Value to set for the resourceentityname property.
     */
    public set resourceentityname(value: string | undefined) {
        this._resourceentityname = value;
    };
    /**
     * Gets the resourcegroupId property value. 
     * @returns a constraintbasedgroup
     */
    public get resourcegroupId() {
        return this._resourcegroupId;
    };
    /**
     * Sets the resourcegroupId property value. 
     * @param value Value to set for the resourcegroupId property.
     */
    public set resourcegroupId(value: Constraintbasedgroup | undefined) {
        this._resourcegroupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_resourcegroupid_value", this._resourcegroupid_value);
        writer.writeStringValue("businessunit", this.businessunit);
        writer.writeStringValue("constraintbasedgroupid", this.constraintbasedgroupid);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("resourceentitylogicalname", this.resourceentitylogicalname);
        writer.writeStringValue("resourceentityname", this.resourceentityname);
        writer.writeObjectValue<Constraintbasedgroup>("resourcegroupId", this.resourcegroupId);
        writer.writeStringValue("virtualresourcegroupresourceid", this.virtualresourcegroupresourceid);
    };
    /**
     * Gets the virtualresourcegroupresourceid property value. 
     * @returns a string
     */
    public get virtualresourcegroupresourceid() {
        return this._virtualresourcegroupresourceid;
    };
    /**
     * Sets the virtualresourcegroupresourceid property value. 
     * @param value Value to set for the virtualresourcegroupresourceid property.
     */
    public set virtualresourcegroupresourceid(value: string | undefined) {
        this._virtualresourcegroupresourceid = value;
    };
}
