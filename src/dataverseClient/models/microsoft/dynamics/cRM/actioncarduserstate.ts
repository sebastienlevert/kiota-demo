import {createActioncardFromDiscriminatorValue} from './createActioncardFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Actioncard, Crmbaseentity, Principal, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Actioncarduserstate extends Crmbaseentity implements Parsable {
    private __actioncardid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _actioncardid?: Actioncard | undefined;
    private _actioncarduserstateid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _ownerid?: Principal | undefined;
    private _startdate?: Date | undefined;
    private _state?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _actioncardid_value property value. 
     * @returns a string
     */
    public get _actioncardid_value() {
        return this.__actioncardid_value;
    };
    /**
     * Sets the _actioncardid_value property value. 
     * @param value Value to set for the _actioncardid_value property.
     */
    public set _actioncardid_value(value: string | undefined) {
        this.__actioncardid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the actioncardid property value. 
     * @returns a actioncard
     */
    public get actioncardid() {
        return this._actioncardid;
    };
    /**
     * Sets the actioncardid property value. 
     * @param value Value to set for the actioncardid property.
     */
    public set actioncardid(value: Actioncard | undefined) {
        this._actioncardid = value;
    };
    /**
     * Gets the actioncarduserstateid property value. 
     * @returns a string
     */
    public get actioncarduserstateid() {
        return this._actioncarduserstateid;
    };
    /**
     * Sets the actioncarduserstateid property value. 
     * @param value Value to set for the actioncarduserstateid property.
     */
    public set actioncarduserstateid(value: string | undefined) {
        this._actioncarduserstateid = value;
    };
    /**
     * Instantiates a new actioncarduserstate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_actioncardid_value": (o, n) => { (o as unknown as Actioncarduserstate)._actioncardid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Actioncarduserstate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Actioncarduserstate)._owningbusinessunit_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Actioncarduserstate)._transactioncurrencyid_value = n.getStringValue(); },
            "actioncardid": (o, n) => { (o as unknown as Actioncarduserstate).actioncardid = n.getObjectValue<Actioncard>(createActioncardFromDiscriminatorValue); },
            "actioncarduserstateid": (o, n) => { (o as unknown as Actioncarduserstate).actioncarduserstateid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Actioncarduserstate).exchangerate = n.getNumberValue(); },
            "ownerid": (o, n) => { (o as unknown as Actioncarduserstate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "startdate": (o, n) => { (o as unknown as Actioncarduserstate).startdate = n.getDateValue(); },
            "state": (o, n) => { (o as unknown as Actioncarduserstate).state = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Actioncarduserstate).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Actioncarduserstate).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Actioncarduserstate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Actioncarduserstate).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_actioncardid_value", this._actioncardid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Actioncard>("actioncardid", this.actioncardid);
        writer.writeStringValue("actioncarduserstateid", this.actioncarduserstateid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeDateValue("startdate", this.startdate);
        writer.writeNumberValue("state", this.state);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the startdate property value. 
     * @returns a Date
     */
    public get startdate() {
        return this._startdate;
    };
    /**
     * Sets the startdate property value. 
     * @param value Value to set for the startdate property.
     */
    public set startdate(value: Date | undefined) {
        this._startdate = value;
    };
    /**
     * Gets the state property value. 
     * @returns a integer
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. 
     * @param value Value to set for the state property.
     */
    public set state(value: number | undefined) {
        this._state = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
