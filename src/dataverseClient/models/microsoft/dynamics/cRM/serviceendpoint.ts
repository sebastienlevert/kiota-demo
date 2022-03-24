import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createKeyvaultreferenceFromDiscriminatorValue} from './createKeyvaultreferenceFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSdkmessageprocessingstepFromDiscriminatorValue} from './createSdkmessageprocessingstepFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {BooleanManagedProperty, Crmbaseentity, Keyvaultreference, Organization, Sdkmessageprocessingstep, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Serviceendpoint extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __keyvaultreferenceid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _authtype?: number | undefined;
    private _authvalue?: string | undefined;
    private _componentstate?: number | undefined;
    private _connectionmode?: number | undefined;
    private _contract?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _introducedversion?: string | undefined;
    private _isauthvalueset?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _issaskeyset?: boolean | undefined;
    private _issastokenset?: boolean | undefined;
    private _keyvaultreferenceid?: Keyvaultreference | undefined;
    private _messagecharset?: number | undefined;
    private _messageformat?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _namespaceaddress?: string | undefined;
    private _namespaceformat?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _path?: string | undefined;
    private _runtimeintegrationproperties?: string | undefined;
    private _saskey?: string | undefined;
    private _saskeyname?: string | undefined;
    private _sastoken?: string | undefined;
    private _schematype?: number | undefined;
    private _serviceendpoint_sdkmessageprocessingstep?: Sdkmessageprocessingstep[] | undefined;
    private _serviceendpointid?: string | undefined;
    private _serviceendpointidunique?: string | undefined;
    private _solutionid?: string | undefined;
    private _solutionnamespace?: string | undefined;
    private _url?: string | undefined;
    private _usekeyvaultconfiguration?: boolean | undefined;
    private _userclaim?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _keyvaultreferenceid_value property value. 
     * @returns a string
     */
    public get _keyvaultreferenceid_value() {
        return this.__keyvaultreferenceid_value;
    };
    /**
     * Sets the _keyvaultreferenceid_value property value. 
     * @param value Value to set for the _keyvaultreferenceid_value property.
     */
    public set _keyvaultreferenceid_value(value: string | undefined) {
        this.__keyvaultreferenceid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the authtype property value. 
     * @returns a integer
     */
    public get authtype() {
        return this._authtype;
    };
    /**
     * Sets the authtype property value. 
     * @param value Value to set for the authtype property.
     */
    public set authtype(value: number | undefined) {
        this._authtype = value;
    };
    /**
     * Gets the authvalue property value. 
     * @returns a string
     */
    public get authvalue() {
        return this._authvalue;
    };
    /**
     * Sets the authvalue property value. 
     * @param value Value to set for the authvalue property.
     */
    public set authvalue(value: string | undefined) {
        this._authvalue = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Gets the connectionmode property value. 
     * @returns a integer
     */
    public get connectionmode() {
        return this._connectionmode;
    };
    /**
     * Sets the connectionmode property value. 
     * @param value Value to set for the connectionmode property.
     */
    public set connectionmode(value: number | undefined) {
        this._connectionmode = value;
    };
    /**
     * Instantiates a new serviceendpoint and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contract property value. 
     * @returns a integer
     */
    public get contract() {
        return this._contract;
    };
    /**
     * Sets the contract property value. 
     * @param value Value to set for the contract property.
     */
    public set contract(value: number | undefined) {
        this._contract = value;
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
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
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Serviceendpoint)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Serviceendpoint)._createdonbehalfby_value = n.getStringValue(); },
            "_keyvaultreferenceid_value": (o, n) => { (o as unknown as Serviceendpoint)._keyvaultreferenceid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Serviceendpoint)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Serviceendpoint)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Serviceendpoint)._organizationid_value = n.getStringValue(); },
            "authtype": (o, n) => { (o as unknown as Serviceendpoint).authtype = n.getNumberValue(); },
            "authvalue": (o, n) => { (o as unknown as Serviceendpoint).authvalue = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Serviceendpoint).componentstate = n.getNumberValue(); },
            "connectionmode": (o, n) => { (o as unknown as Serviceendpoint).connectionmode = n.getNumberValue(); },
            "contract": (o, n) => { (o as unknown as Serviceendpoint).contract = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Serviceendpoint).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Serviceendpoint).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Serviceendpoint).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Serviceendpoint).description = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Serviceendpoint).introducedversion = n.getStringValue(); },
            "isauthvalueset": (o, n) => { (o as unknown as Serviceendpoint).isauthvalueset = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Serviceendpoint).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Serviceendpoint).ismanaged = n.getBooleanValue(); },
            "issaskeyset": (o, n) => { (o as unknown as Serviceendpoint).issaskeyset = n.getBooleanValue(); },
            "issastokenset": (o, n) => { (o as unknown as Serviceendpoint).issastokenset = n.getBooleanValue(); },
            "keyvaultreferenceid": (o, n) => { (o as unknown as Serviceendpoint).keyvaultreferenceid = n.getObjectValue<Keyvaultreference>(createKeyvaultreferenceFromDiscriminatorValue); },
            "messagecharset": (o, n) => { (o as unknown as Serviceendpoint).messagecharset = n.getNumberValue(); },
            "messageformat": (o, n) => { (o as unknown as Serviceendpoint).messageformat = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Serviceendpoint).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Serviceendpoint).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Serviceendpoint).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Serviceendpoint).name = n.getStringValue(); },
            "namespaceaddress": (o, n) => { (o as unknown as Serviceendpoint).namespaceaddress = n.getStringValue(); },
            "namespaceformat": (o, n) => { (o as unknown as Serviceendpoint).namespaceformat = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Serviceendpoint).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Serviceendpoint).overwritetime = n.getDateValue(); },
            "path": (o, n) => { (o as unknown as Serviceendpoint).path = n.getStringValue(); },
            "runtimeintegrationproperties": (o, n) => { (o as unknown as Serviceendpoint).runtimeintegrationproperties = n.getStringValue(); },
            "saskey": (o, n) => { (o as unknown as Serviceendpoint).saskey = n.getStringValue(); },
            "saskeyname": (o, n) => { (o as unknown as Serviceendpoint).saskeyname = n.getStringValue(); },
            "sastoken": (o, n) => { (o as unknown as Serviceendpoint).sastoken = n.getStringValue(); },
            "schematype": (o, n) => { (o as unknown as Serviceendpoint).schematype = n.getNumberValue(); },
            "serviceendpoint_sdkmessageprocessingstep": (o, n) => { (o as unknown as Serviceendpoint).serviceendpoint_sdkmessageprocessingstep = n.getCollectionOfObjectValues<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "serviceendpointid": (o, n) => { (o as unknown as Serviceendpoint).serviceendpointid = n.getStringValue(); },
            "serviceendpointidunique": (o, n) => { (o as unknown as Serviceendpoint).serviceendpointidunique = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Serviceendpoint).solutionid = n.getStringValue(); },
            "solutionnamespace": (o, n) => { (o as unknown as Serviceendpoint).solutionnamespace = n.getStringValue(); },
            "url": (o, n) => { (o as unknown as Serviceendpoint).url = n.getStringValue(); },
            "usekeyvaultconfiguration": (o, n) => { (o as unknown as Serviceendpoint).usekeyvaultconfiguration = n.getBooleanValue(); },
            "userclaim": (o, n) => { (o as unknown as Serviceendpoint).userclaim = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the isauthvalueset property value. 
     * @returns a boolean
     */
    public get isauthvalueset() {
        return this._isauthvalueset;
    };
    /**
     * Sets the isauthvalueset property value. 
     * @param value Value to set for the isauthvalueset property.
     */
    public set isauthvalueset(value: boolean | undefined) {
        this._isauthvalueset = value;
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the issaskeyset property value. 
     * @returns a boolean
     */
    public get issaskeyset() {
        return this._issaskeyset;
    };
    /**
     * Sets the issaskeyset property value. 
     * @param value Value to set for the issaskeyset property.
     */
    public set issaskeyset(value: boolean | undefined) {
        this._issaskeyset = value;
    };
    /**
     * Gets the issastokenset property value. 
     * @returns a boolean
     */
    public get issastokenset() {
        return this._issastokenset;
    };
    /**
     * Sets the issastokenset property value. 
     * @param value Value to set for the issastokenset property.
     */
    public set issastokenset(value: boolean | undefined) {
        this._issastokenset = value;
    };
    /**
     * Gets the keyvaultreferenceid property value. 
     * @returns a keyvaultreference
     */
    public get keyvaultreferenceid() {
        return this._keyvaultreferenceid;
    };
    /**
     * Sets the keyvaultreferenceid property value. 
     * @param value Value to set for the keyvaultreferenceid property.
     */
    public set keyvaultreferenceid(value: Keyvaultreference | undefined) {
        this._keyvaultreferenceid = value;
    };
    /**
     * Gets the messagecharset property value. 
     * @returns a integer
     */
    public get messagecharset() {
        return this._messagecharset;
    };
    /**
     * Sets the messagecharset property value. 
     * @param value Value to set for the messagecharset property.
     */
    public set messagecharset(value: number | undefined) {
        this._messagecharset = value;
    };
    /**
     * Gets the messageformat property value. 
     * @returns a integer
     */
    public get messageformat() {
        return this._messageformat;
    };
    /**
     * Sets the messageformat property value. 
     * @param value Value to set for the messageformat property.
     */
    public set messageformat(value: number | undefined) {
        this._messageformat = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the namespaceaddress property value. 
     * @returns a string
     */
    public get namespaceaddress() {
        return this._namespaceaddress;
    };
    /**
     * Sets the namespaceaddress property value. 
     * @param value Value to set for the namespaceaddress property.
     */
    public set namespaceaddress(value: string | undefined) {
        this._namespaceaddress = value;
    };
    /**
     * Gets the namespaceformat property value. 
     * @returns a integer
     */
    public get namespaceformat() {
        return this._namespaceformat;
    };
    /**
     * Sets the namespaceformat property value. 
     * @param value Value to set for the namespaceformat property.
     */
    public set namespaceformat(value: number | undefined) {
        this._namespaceformat = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the path property value. 
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. 
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Gets the runtimeintegrationproperties property value. 
     * @returns a string
     */
    public get runtimeintegrationproperties() {
        return this._runtimeintegrationproperties;
    };
    /**
     * Sets the runtimeintegrationproperties property value. 
     * @param value Value to set for the runtimeintegrationproperties property.
     */
    public set runtimeintegrationproperties(value: string | undefined) {
        this._runtimeintegrationproperties = value;
    };
    /**
     * Gets the saskey property value. 
     * @returns a string
     */
    public get saskey() {
        return this._saskey;
    };
    /**
     * Sets the saskey property value. 
     * @param value Value to set for the saskey property.
     */
    public set saskey(value: string | undefined) {
        this._saskey = value;
    };
    /**
     * Gets the saskeyname property value. 
     * @returns a string
     */
    public get saskeyname() {
        return this._saskeyname;
    };
    /**
     * Sets the saskeyname property value. 
     * @param value Value to set for the saskeyname property.
     */
    public set saskeyname(value: string | undefined) {
        this._saskeyname = value;
    };
    /**
     * Gets the sastoken property value. 
     * @returns a string
     */
    public get sastoken() {
        return this._sastoken;
    };
    /**
     * Sets the sastoken property value. 
     * @param value Value to set for the sastoken property.
     */
    public set sastoken(value: string | undefined) {
        this._sastoken = value;
    };
    /**
     * Gets the schematype property value. 
     * @returns a integer
     */
    public get schematype() {
        return this._schematype;
    };
    /**
     * Sets the schematype property value. 
     * @param value Value to set for the schematype property.
     */
    public set schematype(value: number | undefined) {
        this._schematype = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_keyvaultreferenceid_value", this._keyvaultreferenceid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("authtype", this.authtype);
        writer.writeStringValue("authvalue", this.authvalue);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeNumberValue("connectionmode", this.connectionmode);
        writer.writeNumberValue("contract", this.contract);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isauthvalueset", this.isauthvalueset);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("issaskeyset", this.issaskeyset);
        writer.writeBooleanValue("issastokenset", this.issastokenset);
        writer.writeObjectValue<Keyvaultreference>("keyvaultreferenceid", this.keyvaultreferenceid);
        writer.writeNumberValue("messagecharset", this.messagecharset);
        writer.writeNumberValue("messageformat", this.messageformat);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("namespaceaddress", this.namespaceaddress);
        writer.writeNumberValue("namespaceformat", this.namespaceformat);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("runtimeintegrationproperties", this.runtimeintegrationproperties);
        writer.writeStringValue("saskey", this.saskey);
        writer.writeStringValue("saskeyname", this.saskeyname);
        writer.writeStringValue("sastoken", this.sastoken);
        writer.writeNumberValue("schematype", this.schematype);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstep>("serviceendpoint_sdkmessageprocessingstep", this.serviceendpoint_sdkmessageprocessingstep);
        writer.writeStringValue("serviceendpointid", this.serviceendpointid);
        writer.writeStringValue("serviceendpointidunique", this.serviceendpointidunique);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("solutionnamespace", this.solutionnamespace);
        writer.writeStringValue("url", this.url);
        writer.writeBooleanValue("usekeyvaultconfiguration", this.usekeyvaultconfiguration);
        writer.writeNumberValue("userclaim", this.userclaim);
    };
    /**
     * Gets the serviceendpoint_sdkmessageprocessingstep property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get serviceendpoint_sdkmessageprocessingstep() {
        return this._serviceendpoint_sdkmessageprocessingstep;
    };
    /**
     * Sets the serviceendpoint_sdkmessageprocessingstep property value. 
     * @param value Value to set for the serviceendpoint_sdkmessageprocessingstep property.
     */
    public set serviceendpoint_sdkmessageprocessingstep(value: Sdkmessageprocessingstep[] | undefined) {
        this._serviceendpoint_sdkmessageprocessingstep = value;
    };
    /**
     * Gets the serviceendpointid property value. 
     * @returns a string
     */
    public get serviceendpointid() {
        return this._serviceendpointid;
    };
    /**
     * Sets the serviceendpointid property value. 
     * @param value Value to set for the serviceendpointid property.
     */
    public set serviceendpointid(value: string | undefined) {
        this._serviceendpointid = value;
    };
    /**
     * Gets the serviceendpointidunique property value. 
     * @returns a string
     */
    public get serviceendpointidunique() {
        return this._serviceendpointidunique;
    };
    /**
     * Sets the serviceendpointidunique property value. 
     * @param value Value to set for the serviceendpointidunique property.
     */
    public set serviceendpointidunique(value: string | undefined) {
        this._serviceendpointidunique = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the solutionnamespace property value. 
     * @returns a string
     */
    public get solutionnamespace() {
        return this._solutionnamespace;
    };
    /**
     * Sets the solutionnamespace property value. 
     * @param value Value to set for the solutionnamespace property.
     */
    public set solutionnamespace(value: string | undefined) {
        this._solutionnamespace = value;
    };
    /**
     * Gets the url property value. 
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. 
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
    /**
     * Gets the usekeyvaultconfiguration property value. 
     * @returns a boolean
     */
    public get usekeyvaultconfiguration() {
        return this._usekeyvaultconfiguration;
    };
    /**
     * Sets the usekeyvaultconfiguration property value. 
     * @param value Value to set for the usekeyvaultconfiguration property.
     */
    public set usekeyvaultconfiguration(value: boolean | undefined) {
        this._usekeyvaultconfiguration = value;
    };
    /**
     * Gets the userclaim property value. 
     * @returns a integer
     */
    public get userclaim() {
        return this._userclaim;
    };
    /**
     * Sets the userclaim property value. 
     * @param value Value to set for the userclaim property.
     */
    public set userclaim(value: number | undefined) {
        this._userclaim = value;
    };
}
