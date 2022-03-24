import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Plugintracelog extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private _configuration?: string | undefined;
    private _correlationid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _depth?: number | undefined;
    private _exceptiondetails?: string | undefined;
    private _issystemcreated?: boolean | undefined;
    private _messageblock?: string | undefined;
    private _messagename?: string | undefined;
    private _mode?: number | undefined;
    private _operationtype?: number | undefined;
    private _organizationid?: string | undefined;
    private _performanceconstructorduration?: number | undefined;
    private _performanceconstructorstarttime?: Date | undefined;
    private _performanceexecutionduration?: number | undefined;
    private _performanceexecutionstarttime?: Date | undefined;
    private _persistencekey?: string | undefined;
    private _pluginstepid?: string | undefined;
    private _plugintracelogid?: string | undefined;
    private _primaryentity?: string | undefined;
    private _profile?: string | undefined;
    private _requestid?: string | undefined;
    private _secureconfiguration?: string | undefined;
    private _typename?: string | undefined;
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
     * Gets the configuration property value. 
     * @returns a string
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. 
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: string | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new plugintracelog and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the correlationid property value. 
     * @returns a string
     */
    public get correlationid() {
        return this._correlationid;
    };
    /**
     * Sets the correlationid property value. 
     * @param value Value to set for the correlationid property.
     */
    public set correlationid(value: string | undefined) {
        this._correlationid = value;
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
     * Gets the depth property value. 
     * @returns a integer
     */
    public get depth() {
        return this._depth;
    };
    /**
     * Sets the depth property value. 
     * @param value Value to set for the depth property.
     */
    public set depth(value: number | undefined) {
        this._depth = value;
    };
    /**
     * Gets the exceptiondetails property value. 
     * @returns a string
     */
    public get exceptiondetails() {
        return this._exceptiondetails;
    };
    /**
     * Sets the exceptiondetails property value. 
     * @param value Value to set for the exceptiondetails property.
     */
    public set exceptiondetails(value: string | undefined) {
        this._exceptiondetails = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Plugintracelog)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Plugintracelog)._createdonbehalfby_value = n.getStringValue(); },
            "configuration": (o, n) => { (o as unknown as Plugintracelog).configuration = n.getStringValue(); },
            "correlationid": (o, n) => { (o as unknown as Plugintracelog).correlationid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Plugintracelog).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Plugintracelog).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Plugintracelog).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "depth": (o, n) => { (o as unknown as Plugintracelog).depth = n.getNumberValue(); },
            "exceptiondetails": (o, n) => { (o as unknown as Plugintracelog).exceptiondetails = n.getStringValue(); },
            "issystemcreated": (o, n) => { (o as unknown as Plugintracelog).issystemcreated = n.getBooleanValue(); },
            "messageblock": (o, n) => { (o as unknown as Plugintracelog).messageblock = n.getStringValue(); },
            "messagename": (o, n) => { (o as unknown as Plugintracelog).messagename = n.getStringValue(); },
            "mode": (o, n) => { (o as unknown as Plugintracelog).mode = n.getNumberValue(); },
            "operationtype": (o, n) => { (o as unknown as Plugintracelog).operationtype = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Plugintracelog).organizationid = n.getStringValue(); },
            "performanceconstructorduration": (o, n) => { (o as unknown as Plugintracelog).performanceconstructorduration = n.getNumberValue(); },
            "performanceconstructorstarttime": (o, n) => { (o as unknown as Plugintracelog).performanceconstructorstarttime = n.getDateValue(); },
            "performanceexecutionduration": (o, n) => { (o as unknown as Plugintracelog).performanceexecutionduration = n.getNumberValue(); },
            "performanceexecutionstarttime": (o, n) => { (o as unknown as Plugintracelog).performanceexecutionstarttime = n.getDateValue(); },
            "persistencekey": (o, n) => { (o as unknown as Plugintracelog).persistencekey = n.getStringValue(); },
            "pluginstepid": (o, n) => { (o as unknown as Plugintracelog).pluginstepid = n.getStringValue(); },
            "plugintracelogid": (o, n) => { (o as unknown as Plugintracelog).plugintracelogid = n.getStringValue(); },
            "primaryentity": (o, n) => { (o as unknown as Plugintracelog).primaryentity = n.getStringValue(); },
            "profile": (o, n) => { (o as unknown as Plugintracelog).profile = n.getStringValue(); },
            "requestid": (o, n) => { (o as unknown as Plugintracelog).requestid = n.getStringValue(); },
            "secureconfiguration": (o, n) => { (o as unknown as Plugintracelog).secureconfiguration = n.getStringValue(); },
            "typename": (o, n) => { (o as unknown as Plugintracelog).typename = n.getStringValue(); },
        };
    };
    /**
     * Gets the issystemcreated property value. 
     * @returns a boolean
     */
    public get issystemcreated() {
        return this._issystemcreated;
    };
    /**
     * Sets the issystemcreated property value. 
     * @param value Value to set for the issystemcreated property.
     */
    public set issystemcreated(value: boolean | undefined) {
        this._issystemcreated = value;
    };
    /**
     * Gets the messageblock property value. 
     * @returns a string
     */
    public get messageblock() {
        return this._messageblock;
    };
    /**
     * Sets the messageblock property value. 
     * @param value Value to set for the messageblock property.
     */
    public set messageblock(value: string | undefined) {
        this._messageblock = value;
    };
    /**
     * Gets the messagename property value. 
     * @returns a string
     */
    public get messagename() {
        return this._messagename;
    };
    /**
     * Sets the messagename property value. 
     * @param value Value to set for the messagename property.
     */
    public set messagename(value: string | undefined) {
        this._messagename = value;
    };
    /**
     * Gets the mode property value. 
     * @returns a integer
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Sets the mode property value. 
     * @param value Value to set for the mode property.
     */
    public set mode(value: number | undefined) {
        this._mode = value;
    };
    /**
     * Gets the operationtype property value. 
     * @returns a integer
     */
    public get operationtype() {
        return this._operationtype;
    };
    /**
     * Sets the operationtype property value. 
     * @param value Value to set for the operationtype property.
     */
    public set operationtype(value: number | undefined) {
        this._operationtype = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the performanceconstructorduration property value. 
     * @returns a integer
     */
    public get performanceconstructorduration() {
        return this._performanceconstructorduration;
    };
    /**
     * Sets the performanceconstructorduration property value. 
     * @param value Value to set for the performanceconstructorduration property.
     */
    public set performanceconstructorduration(value: number | undefined) {
        this._performanceconstructorduration = value;
    };
    /**
     * Gets the performanceconstructorstarttime property value. 
     * @returns a Date
     */
    public get performanceconstructorstarttime() {
        return this._performanceconstructorstarttime;
    };
    /**
     * Sets the performanceconstructorstarttime property value. 
     * @param value Value to set for the performanceconstructorstarttime property.
     */
    public set performanceconstructorstarttime(value: Date | undefined) {
        this._performanceconstructorstarttime = value;
    };
    /**
     * Gets the performanceexecutionduration property value. 
     * @returns a integer
     */
    public get performanceexecutionduration() {
        return this._performanceexecutionduration;
    };
    /**
     * Sets the performanceexecutionduration property value. 
     * @param value Value to set for the performanceexecutionduration property.
     */
    public set performanceexecutionduration(value: number | undefined) {
        this._performanceexecutionduration = value;
    };
    /**
     * Gets the performanceexecutionstarttime property value. 
     * @returns a Date
     */
    public get performanceexecutionstarttime() {
        return this._performanceexecutionstarttime;
    };
    /**
     * Sets the performanceexecutionstarttime property value. 
     * @param value Value to set for the performanceexecutionstarttime property.
     */
    public set performanceexecutionstarttime(value: Date | undefined) {
        this._performanceexecutionstarttime = value;
    };
    /**
     * Gets the persistencekey property value. 
     * @returns a string
     */
    public get persistencekey() {
        return this._persistencekey;
    };
    /**
     * Sets the persistencekey property value. 
     * @param value Value to set for the persistencekey property.
     */
    public set persistencekey(value: string | undefined) {
        this._persistencekey = value;
    };
    /**
     * Gets the pluginstepid property value. 
     * @returns a string
     */
    public get pluginstepid() {
        return this._pluginstepid;
    };
    /**
     * Sets the pluginstepid property value. 
     * @param value Value to set for the pluginstepid property.
     */
    public set pluginstepid(value: string | undefined) {
        this._pluginstepid = value;
    };
    /**
     * Gets the plugintracelogid property value. 
     * @returns a string
     */
    public get plugintracelogid() {
        return this._plugintracelogid;
    };
    /**
     * Sets the plugintracelogid property value. 
     * @param value Value to set for the plugintracelogid property.
     */
    public set plugintracelogid(value: string | undefined) {
        this._plugintracelogid = value;
    };
    /**
     * Gets the primaryentity property value. 
     * @returns a string
     */
    public get primaryentity() {
        return this._primaryentity;
    };
    /**
     * Sets the primaryentity property value. 
     * @param value Value to set for the primaryentity property.
     */
    public set primaryentity(value: string | undefined) {
        this._primaryentity = value;
    };
    /**
     * Gets the profile property value. 
     * @returns a string
     */
    public get profile() {
        return this._profile;
    };
    /**
     * Sets the profile property value. 
     * @param value Value to set for the profile property.
     */
    public set profile(value: string | undefined) {
        this._profile = value;
    };
    /**
     * Gets the requestid property value. 
     * @returns a string
     */
    public get requestid() {
        return this._requestid;
    };
    /**
     * Sets the requestid property value. 
     * @param value Value to set for the requestid property.
     */
    public set requestid(value: string | undefined) {
        this._requestid = value;
    };
    /**
     * Gets the secureconfiguration property value. 
     * @returns a string
     */
    public get secureconfiguration() {
        return this._secureconfiguration;
    };
    /**
     * Sets the secureconfiguration property value. 
     * @param value Value to set for the secureconfiguration property.
     */
    public set secureconfiguration(value: string | undefined) {
        this._secureconfiguration = value;
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
        writer.writeStringValue("configuration", this.configuration);
        writer.writeStringValue("correlationid", this.correlationid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("depth", this.depth);
        writer.writeStringValue("exceptiondetails", this.exceptiondetails);
        writer.writeBooleanValue("issystemcreated", this.issystemcreated);
        writer.writeStringValue("messageblock", this.messageblock);
        writer.writeStringValue("messagename", this.messagename);
        writer.writeNumberValue("mode", this.mode);
        writer.writeNumberValue("operationtype", this.operationtype);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeNumberValue("performanceconstructorduration", this.performanceconstructorduration);
        writer.writeDateValue("performanceconstructorstarttime", this.performanceconstructorstarttime);
        writer.writeNumberValue("performanceexecutionduration", this.performanceexecutionduration);
        writer.writeDateValue("performanceexecutionstarttime", this.performanceexecutionstarttime);
        writer.writeStringValue("persistencekey", this.persistencekey);
        writer.writeStringValue("pluginstepid", this.pluginstepid);
        writer.writeStringValue("plugintracelogid", this.plugintracelogid);
        writer.writeStringValue("primaryentity", this.primaryentity);
        writer.writeStringValue("profile", this.profile);
        writer.writeStringValue("requestid", this.requestid);
        writer.writeStringValue("secureconfiguration", this.secureconfiguration);
        writer.writeStringValue("typename", this.typename);
    };
    /**
     * Gets the typename property value. 
     * @returns a string
     */
    public get typename() {
        return this._typename;
    };
    /**
     * Sets the typename property value. 
     * @param value Value to set for the typename property.
     */
    public set typename(value: string | undefined) {
        this._typename = value;
    };
}
