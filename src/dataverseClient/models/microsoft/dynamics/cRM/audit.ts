import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Audit extends Crmbaseentity implements Parsable {
    private __callinguserid_value?: string | undefined;
    private __objectid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __userid_value?: string | undefined;
    private _action?: number | undefined;
    private _attributemask?: string | undefined;
    private _auditid?: string | undefined;
    private _callinguserid?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _objecttypecode?: string | undefined;
    private _operation?: number | undefined;
    private _transactionid?: string | undefined;
    private _useradditionalinfo?: string | undefined;
    private _userid?: Systemuser | undefined;
    /**
     * Gets the _callinguserid_value property value. 
     * @returns a string
     */
    public get _callinguserid_value() {
        return this.__callinguserid_value;
    };
    /**
     * Sets the _callinguserid_value property value. 
     * @param value Value to set for the _callinguserid_value property.
     */
    public set _callinguserid_value(value: string | undefined) {
        this.__callinguserid_value = value;
    };
    /**
     * Gets the _objectid_value property value. 
     * @returns a string
     */
    public get _objectid_value() {
        return this.__objectid_value;
    };
    /**
     * Sets the _objectid_value property value. 
     * @param value Value to set for the _objectid_value property.
     */
    public set _objectid_value(value: string | undefined) {
        this.__objectid_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the _userid_value property value. 
     * @returns a string
     */
    public get _userid_value() {
        return this.__userid_value;
    };
    /**
     * Sets the _userid_value property value. 
     * @param value Value to set for the _userid_value property.
     */
    public set _userid_value(value: string | undefined) {
        this.__userid_value = value;
    };
    /**
     * Gets the action property value. 
     * @returns a integer
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. 
     * @param value Value to set for the action property.
     */
    public set action(value: number | undefined) {
        this._action = value;
    };
    /**
     * Gets the attributemask property value. 
     * @returns a string
     */
    public get attributemask() {
        return this._attributemask;
    };
    /**
     * Sets the attributemask property value. 
     * @param value Value to set for the attributemask property.
     */
    public set attributemask(value: string | undefined) {
        this._attributemask = value;
    };
    /**
     * Gets the auditid property value. 
     * @returns a string
     */
    public get auditid() {
        return this._auditid;
    };
    /**
     * Sets the auditid property value. 
     * @param value Value to set for the auditid property.
     */
    public set auditid(value: string | undefined) {
        this._auditid = value;
    };
    /**
     * Gets the callinguserid property value. 
     * @returns a systemuser
     */
    public get callinguserid() {
        return this._callinguserid;
    };
    /**
     * Sets the callinguserid property value. 
     * @param value Value to set for the callinguserid property.
     */
    public set callinguserid(value: Systemuser | undefined) {
        this._callinguserid = value;
    };
    /**
     * Instantiates a new audit and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_callinguserid_value": (o, n) => { (o as unknown as Audit)._callinguserid_value = n.getStringValue(); },
            "_objectid_value": (o, n) => { (o as unknown as Audit)._objectid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Audit)._regardingobjectid_value = n.getStringValue(); },
            "_userid_value": (o, n) => { (o as unknown as Audit)._userid_value = n.getStringValue(); },
            "action": (o, n) => { (o as unknown as Audit).action = n.getNumberValue(); },
            "attributemask": (o, n) => { (o as unknown as Audit).attributemask = n.getStringValue(); },
            "auditid": (o, n) => { (o as unknown as Audit).auditid = n.getStringValue(); },
            "callinguserid": (o, n) => { (o as unknown as Audit).callinguserid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Audit).createdon = n.getDateValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Audit).objecttypecode = n.getStringValue(); },
            "operation": (o, n) => { (o as unknown as Audit).operation = n.getNumberValue(); },
            "transactionid": (o, n) => { (o as unknown as Audit).transactionid = n.getStringValue(); },
            "useradditionalinfo": (o, n) => { (o as unknown as Audit).useradditionalinfo = n.getStringValue(); },
            "userid": (o, n) => { (o as unknown as Audit).userid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the operation property value. 
     * @returns a integer
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Sets the operation property value. 
     * @param value Value to set for the operation property.
     */
    public set operation(value: number | undefined) {
        this._operation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_callinguserid_value", this._callinguserid_value);
        writer.writeStringValue("_objectid_value", this._objectid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_userid_value", this._userid_value);
        writer.writeNumberValue("action", this.action);
        writer.writeStringValue("attributemask", this.attributemask);
        writer.writeStringValue("auditid", this.auditid);
        writer.writeObjectValue<Systemuser>("callinguserid", this.callinguserid);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeNumberValue("operation", this.operation);
        writer.writeStringValue("transactionid", this.transactionid);
        writer.writeStringValue("useradditionalinfo", this.useradditionalinfo);
        writer.writeObjectValue<Systemuser>("userid", this.userid);
    };
    /**
     * Gets the transactionid property value. 
     * @returns a string
     */
    public get transactionid() {
        return this._transactionid;
    };
    /**
     * Sets the transactionid property value. 
     * @param value Value to set for the transactionid property.
     */
    public set transactionid(value: string | undefined) {
        this._transactionid = value;
    };
    /**
     * Gets the useradditionalinfo property value. 
     * @returns a string
     */
    public get useradditionalinfo() {
        return this._useradditionalinfo;
    };
    /**
     * Sets the useradditionalinfo property value. 
     * @param value Value to set for the useradditionalinfo property.
     */
    public set useradditionalinfo(value: string | undefined) {
        this._useradditionalinfo = value;
    };
    /**
     * Gets the userid property value. 
     * @returns a systemuser
     */
    public get userid() {
        return this._userid;
    };
    /**
     * Sets the userid property value. 
     * @param value Value to set for the userid property.
     */
    public set userid(value: Systemuser | undefined) {
        this._userid = value;
    };
}
