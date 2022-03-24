import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPlugintypeFromDiscriminatorValue} from './createPlugintypeFromDiscriminatorValue';
import {createSdkmessagefilterFromDiscriminatorValue} from './createSdkmessagefilterFromDiscriminatorValue';
import {createSdkmessageFromDiscriminatorValue} from './createSdkmessageFromDiscriminatorValue';
import {createSdkmessageprocessingstepimageFromDiscriminatorValue} from './createSdkmessageprocessingstepimageFromDiscriminatorValue';
import {createSdkmessageprocessingstepsecureconfigFromDiscriminatorValue} from './createSdkmessageprocessingstepsecureconfigFromDiscriminatorValue';
import {createServiceendpointFromDiscriminatorValue} from './createServiceendpointFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Crmbaseentity, Organization, Plugintype, Sdkmessage, Sdkmessagefilter, Sdkmessageprocessingstepimage, Sdkmessageprocessingstepsecureconfig, Serviceendpoint, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sdkmessageprocessingstep extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __eventhandler_value?: string | undefined;
    private __impersonatinguserid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __sdkmessagefilterid_value?: string | undefined;
    private __sdkmessageid_value?: string | undefined;
    private __sdkmessageprocessingstepsecureconfigid_value?: string | undefined;
    private _asyncautodelete?: boolean | undefined;
    private _canusereadonlyconnection?: boolean | undefined;
    private _category?: string | undefined;
    private _componentstate?: number | undefined;
    private _configuration?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customizationlevel?: number | undefined;
    private _description?: string | undefined;
    private _eventexpander?: string | undefined;
    private _eventhandler_plugintype?: Plugintype | undefined;
    private _eventhandler_serviceendpoint?: Serviceendpoint | undefined;
    private _filteringattributes?: string | undefined;
    private _impersonatinguserid?: Systemuser | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ishidden?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _mode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _plugintypeid?: Plugintype | undefined;
    private _rank?: number | undefined;
    private _runtimeintegrationproperties?: string | undefined;
    private _sdkmessagefilterid?: Sdkmessagefilter | undefined;
    private _sdkmessageid?: Sdkmessage | undefined;
    private _sdkMessageProcessingStep_AsyncOperations?: Asyncoperation[] | undefined;
    private _sdkmessageprocessingstepid?: string | undefined;
    private _sdkmessageprocessingstepid_sdkmessageprocessingstepimage?: Sdkmessageprocessingstepimage[] | undefined;
    private _sdkmessageprocessingstepidunique?: string | undefined;
    private _sdkmessageprocessingstepsecureconfigid?: Sdkmessageprocessingstepsecureconfig | undefined;
    private _solutionid?: string | undefined;
    private _stage?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _supporteddeployment?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _eventhandler_value property value. 
     * @returns a string
     */
    public get _eventhandler_value() {
        return this.__eventhandler_value;
    };
    /**
     * Sets the _eventhandler_value property value. 
     * @param value Value to set for the _eventhandler_value property.
     */
    public set _eventhandler_value(value: string | undefined) {
        this.__eventhandler_value = value;
    };
    /**
     * Gets the _impersonatinguserid_value property value. 
     * @returns a string
     */
    public get _impersonatinguserid_value() {
        return this.__impersonatinguserid_value;
    };
    /**
     * Sets the _impersonatinguserid_value property value. 
     * @param value Value to set for the _impersonatinguserid_value property.
     */
    public set _impersonatinguserid_value(value: string | undefined) {
        this.__impersonatinguserid_value = value;
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
     * Gets the _sdkmessagefilterid_value property value. 
     * @returns a string
     */
    public get _sdkmessagefilterid_value() {
        return this.__sdkmessagefilterid_value;
    };
    /**
     * Sets the _sdkmessagefilterid_value property value. 
     * @param value Value to set for the _sdkmessagefilterid_value property.
     */
    public set _sdkmessagefilterid_value(value: string | undefined) {
        this.__sdkmessagefilterid_value = value;
    };
    /**
     * Gets the _sdkmessageid_value property value. 
     * @returns a string
     */
    public get _sdkmessageid_value() {
        return this.__sdkmessageid_value;
    };
    /**
     * Sets the _sdkmessageid_value property value. 
     * @param value Value to set for the _sdkmessageid_value property.
     */
    public set _sdkmessageid_value(value: string | undefined) {
        this.__sdkmessageid_value = value;
    };
    /**
     * Gets the _sdkmessageprocessingstepsecureconfigid_value property value. 
     * @returns a string
     */
    public get _sdkmessageprocessingstepsecureconfigid_value() {
        return this.__sdkmessageprocessingstepsecureconfigid_value;
    };
    /**
     * Sets the _sdkmessageprocessingstepsecureconfigid_value property value. 
     * @param value Value to set for the _sdkmessageprocessingstepsecureconfigid_value property.
     */
    public set _sdkmessageprocessingstepsecureconfigid_value(value: string | undefined) {
        this.__sdkmessageprocessingstepsecureconfigid_value = value;
    };
    /**
     * Gets the asyncautodelete property value. 
     * @returns a boolean
     */
    public get asyncautodelete() {
        return this._asyncautodelete;
    };
    /**
     * Sets the asyncautodelete property value. 
     * @param value Value to set for the asyncautodelete property.
     */
    public set asyncautodelete(value: boolean | undefined) {
        this._asyncautodelete = value;
    };
    /**
     * Gets the canusereadonlyconnection property value. 
     * @returns a boolean
     */
    public get canusereadonlyconnection() {
        return this._canusereadonlyconnection;
    };
    /**
     * Sets the canusereadonlyconnection property value. 
     * @param value Value to set for the canusereadonlyconnection property.
     */
    public set canusereadonlyconnection(value: boolean | undefined) {
        this._canusereadonlyconnection = value;
    };
    /**
     * Gets the category property value. 
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
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
     * Instantiates a new sdkmessageprocessingstep and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the customizationlevel property value. 
     * @returns a integer
     */
    public get customizationlevel() {
        return this._customizationlevel;
    };
    /**
     * Sets the customizationlevel property value. 
     * @param value Value to set for the customizationlevel property.
     */
    public set customizationlevel(value: number | undefined) {
        this._customizationlevel = value;
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
     * Gets the eventexpander property value. 
     * @returns a string
     */
    public get eventexpander() {
        return this._eventexpander;
    };
    /**
     * Sets the eventexpander property value. 
     * @param value Value to set for the eventexpander property.
     */
    public set eventexpander(value: string | undefined) {
        this._eventexpander = value;
    };
    /**
     * Gets the eventhandler_plugintype property value. 
     * @returns a plugintype
     */
    public get eventhandler_plugintype() {
        return this._eventhandler_plugintype;
    };
    /**
     * Sets the eventhandler_plugintype property value. 
     * @param value Value to set for the eventhandler_plugintype property.
     */
    public set eventhandler_plugintype(value: Plugintype | undefined) {
        this._eventhandler_plugintype = value;
    };
    /**
     * Gets the eventhandler_serviceendpoint property value. 
     * @returns a serviceendpoint
     */
    public get eventhandler_serviceendpoint() {
        return this._eventhandler_serviceendpoint;
    };
    /**
     * Sets the eventhandler_serviceendpoint property value. 
     * @param value Value to set for the eventhandler_serviceendpoint property.
     */
    public set eventhandler_serviceendpoint(value: Serviceendpoint | undefined) {
        this._eventhandler_serviceendpoint = value;
    };
    /**
     * Gets the filteringattributes property value. 
     * @returns a string
     */
    public get filteringattributes() {
        return this._filteringattributes;
    };
    /**
     * Sets the filteringattributes property value. 
     * @param value Value to set for the filteringattributes property.
     */
    public set filteringattributes(value: string | undefined) {
        this._filteringattributes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._createdonbehalfby_value = n.getStringValue(); },
            "_eventhandler_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._eventhandler_value = n.getStringValue(); },
            "_impersonatinguserid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._impersonatinguserid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._organizationid_value = n.getStringValue(); },
            "_sdkmessagefilterid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._sdkmessagefilterid_value = n.getStringValue(); },
            "_sdkmessageid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._sdkmessageid_value = n.getStringValue(); },
            "_sdkmessageprocessingstepsecureconfigid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstep)._sdkmessageprocessingstepsecureconfigid_value = n.getStringValue(); },
            "asyncautodelete": (o, n) => { (o as unknown as Sdkmessageprocessingstep).asyncautodelete = n.getBooleanValue(); },
            "canusereadonlyconnection": (o, n) => { (o as unknown as Sdkmessageprocessingstep).canusereadonlyconnection = n.getBooleanValue(); },
            "category": (o, n) => { (o as unknown as Sdkmessageprocessingstep).category = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Sdkmessageprocessingstep).componentstate = n.getNumberValue(); },
            "configuration": (o, n) => { (o as unknown as Sdkmessageprocessingstep).configuration = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Sdkmessageprocessingstep).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sdkmessageprocessingstep).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sdkmessageprocessingstep).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customizationlevel": (o, n) => { (o as unknown as Sdkmessageprocessingstep).customizationlevel = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Sdkmessageprocessingstep).description = n.getStringValue(); },
            "eventexpander": (o, n) => { (o as unknown as Sdkmessageprocessingstep).eventexpander = n.getStringValue(); },
            "eventhandler_plugintype": (o, n) => { (o as unknown as Sdkmessageprocessingstep).eventhandler_plugintype = n.getObjectValue<Plugintype>(createPlugintypeFromDiscriminatorValue); },
            "eventhandler_serviceendpoint": (o, n) => { (o as unknown as Sdkmessageprocessingstep).eventhandler_serviceendpoint = n.getObjectValue<Serviceendpoint>(createServiceendpointFromDiscriminatorValue); },
            "filteringattributes": (o, n) => { (o as unknown as Sdkmessageprocessingstep).filteringattributes = n.getStringValue(); },
            "impersonatinguserid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).impersonatinguserid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Sdkmessageprocessingstep).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Sdkmessageprocessingstep).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ishidden": (o, n) => { (o as unknown as Sdkmessageprocessingstep).ishidden = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Sdkmessageprocessingstep).ismanaged = n.getBooleanValue(); },
            "mode": (o, n) => { (o as unknown as Sdkmessageprocessingstep).mode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sdkmessageprocessingstep).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sdkmessageprocessingstep).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sdkmessageprocessingstep).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sdkmessageprocessingstep).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Sdkmessageprocessingstep).overwritetime = n.getDateValue(); },
            "plugintypeid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).plugintypeid = n.getObjectValue<Plugintype>(createPlugintypeFromDiscriminatorValue); },
            "rank": (o, n) => { (o as unknown as Sdkmessageprocessingstep).rank = n.getNumberValue(); },
            "runtimeintegrationproperties": (o, n) => { (o as unknown as Sdkmessageprocessingstep).runtimeintegrationproperties = n.getStringValue(); },
            "sdkmessagefilterid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkmessagefilterid = n.getObjectValue<Sdkmessagefilter>(createSdkmessagefilterFromDiscriminatorValue); },
            "sdkmessageid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkmessageid = n.getObjectValue<Sdkmessage>(createSdkmessageFromDiscriminatorValue); },
            "sdkMessageProcessingStep_AsyncOperations": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkMessageProcessingStep_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "sdkmessageprocessingstepid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkmessageprocessingstepid = n.getStringValue(); },
            "sdkmessageprocessingstepid_sdkmessageprocessingstepimage": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkmessageprocessingstepid_sdkmessageprocessingstepimage = n.getCollectionOfObjectValues<Sdkmessageprocessingstepimage>(createSdkmessageprocessingstepimageFromDiscriminatorValue); },
            "sdkmessageprocessingstepidunique": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkmessageprocessingstepidunique = n.getStringValue(); },
            "sdkmessageprocessingstepsecureconfigid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).sdkmessageprocessingstepsecureconfigid = n.getObjectValue<Sdkmessageprocessingstepsecureconfig>(createSdkmessageprocessingstepsecureconfigFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Sdkmessageprocessingstep).solutionid = n.getStringValue(); },
            "stage": (o, n) => { (o as unknown as Sdkmessageprocessingstep).stage = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Sdkmessageprocessingstep).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Sdkmessageprocessingstep).statuscode = n.getNumberValue(); },
            "supporteddeployment": (o, n) => { (o as unknown as Sdkmessageprocessingstep).supporteddeployment = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sdkmessageprocessingstep).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the impersonatinguserid property value. 
     * @returns a systemuser
     */
    public get impersonatinguserid() {
        return this._impersonatinguserid;
    };
    /**
     * Sets the impersonatinguserid property value. 
     * @param value Value to set for the impersonatinguserid property.
     */
    public set impersonatinguserid(value: Systemuser | undefined) {
        this._impersonatinguserid = value;
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
     * Gets the ishidden property value. 
     * @returns a BooleanManagedProperty
     */
    public get ishidden() {
        return this._ishidden;
    };
    /**
     * Sets the ishidden property value. 
     * @param value Value to set for the ishidden property.
     */
    public set ishidden(value: BooleanManagedProperty | undefined) {
        this._ishidden = value;
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
     * Gets the plugintypeid property value. 
     * @returns a plugintype
     */
    public get plugintypeid() {
        return this._plugintypeid;
    };
    /**
     * Sets the plugintypeid property value. 
     * @param value Value to set for the plugintypeid property.
     */
    public set plugintypeid(value: Plugintype | undefined) {
        this._plugintypeid = value;
    };
    /**
     * Gets the rank property value. 
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. 
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
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
     * Gets the sdkmessagefilterid property value. 
     * @returns a sdkmessagefilter
     */
    public get sdkmessagefilterid() {
        return this._sdkmessagefilterid;
    };
    /**
     * Sets the sdkmessagefilterid property value. 
     * @param value Value to set for the sdkmessagefilterid property.
     */
    public set sdkmessagefilterid(value: Sdkmessagefilter | undefined) {
        this._sdkmessagefilterid = value;
    };
    /**
     * Gets the sdkmessageid property value. 
     * @returns a sdkmessage
     */
    public get sdkmessageid() {
        return this._sdkmessageid;
    };
    /**
     * Sets the sdkmessageid property value. 
     * @param value Value to set for the sdkmessageid property.
     */
    public set sdkmessageid(value: Sdkmessage | undefined) {
        this._sdkmessageid = value;
    };
    /**
     * Gets the sdkMessageProcessingStep_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get sdkMessageProcessingStep_AsyncOperations() {
        return this._sdkMessageProcessingStep_AsyncOperations;
    };
    /**
     * Sets the sdkMessageProcessingStep_AsyncOperations property value. 
     * @param value Value to set for the SdkMessageProcessingStep_AsyncOperations property.
     */
    public set sdkMessageProcessingStep_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._sdkMessageProcessingStep_AsyncOperations = value;
    };
    /**
     * Gets the sdkmessageprocessingstepid property value. 
     * @returns a string
     */
    public get sdkmessageprocessingstepid() {
        return this._sdkmessageprocessingstepid;
    };
    /**
     * Sets the sdkmessageprocessingstepid property value. 
     * @param value Value to set for the sdkmessageprocessingstepid property.
     */
    public set sdkmessageprocessingstepid(value: string | undefined) {
        this._sdkmessageprocessingstepid = value;
    };
    /**
     * Gets the sdkmessageprocessingstepid_sdkmessageprocessingstepimage property value. 
     * @returns a sdkmessageprocessingstepimage
     */
    public get sdkmessageprocessingstepid_sdkmessageprocessingstepimage() {
        return this._sdkmessageprocessingstepid_sdkmessageprocessingstepimage;
    };
    /**
     * Sets the sdkmessageprocessingstepid_sdkmessageprocessingstepimage property value. 
     * @param value Value to set for the sdkmessageprocessingstepid_sdkmessageprocessingstepimage property.
     */
    public set sdkmessageprocessingstepid_sdkmessageprocessingstepimage(value: Sdkmessageprocessingstepimage[] | undefined) {
        this._sdkmessageprocessingstepid_sdkmessageprocessingstepimage = value;
    };
    /**
     * Gets the sdkmessageprocessingstepidunique property value. 
     * @returns a string
     */
    public get sdkmessageprocessingstepidunique() {
        return this._sdkmessageprocessingstepidunique;
    };
    /**
     * Sets the sdkmessageprocessingstepidunique property value. 
     * @param value Value to set for the sdkmessageprocessingstepidunique property.
     */
    public set sdkmessageprocessingstepidunique(value: string | undefined) {
        this._sdkmessageprocessingstepidunique = value;
    };
    /**
     * Gets the sdkmessageprocessingstepsecureconfigid property value. 
     * @returns a sdkmessageprocessingstepsecureconfig
     */
    public get sdkmessageprocessingstepsecureconfigid() {
        return this._sdkmessageprocessingstepsecureconfigid;
    };
    /**
     * Sets the sdkmessageprocessingstepsecureconfigid property value. 
     * @param value Value to set for the sdkmessageprocessingstepsecureconfigid property.
     */
    public set sdkmessageprocessingstepsecureconfigid(value: Sdkmessageprocessingstepsecureconfig | undefined) {
        this._sdkmessageprocessingstepsecureconfigid = value;
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
        writer.writeStringValue("_eventhandler_value", this._eventhandler_value);
        writer.writeStringValue("_impersonatinguserid_value", this._impersonatinguserid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_sdkmessagefilterid_value", this._sdkmessagefilterid_value);
        writer.writeStringValue("_sdkmessageid_value", this._sdkmessageid_value);
        writer.writeStringValue("_sdkmessageprocessingstepsecureconfigid_value", this._sdkmessageprocessingstepsecureconfigid_value);
        writer.writeBooleanValue("asyncautodelete", this.asyncautodelete);
        writer.writeBooleanValue("canusereadonlyconnection", this.canusereadonlyconnection);
        writer.writeStringValue("category", this.category);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("configuration", this.configuration);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("eventexpander", this.eventexpander);
        writer.writeObjectValue<Plugintype>("eventhandler_plugintype", this.eventhandler_plugintype);
        writer.writeObjectValue<Serviceendpoint>("eventhandler_serviceendpoint", this.eventhandler_serviceendpoint);
        writer.writeStringValue("filteringattributes", this.filteringattributes);
        writer.writeObjectValue<Systemuser>("impersonatinguserid", this.impersonatinguserid);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeObjectValue<BooleanManagedProperty>("ishidden", this.ishidden);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeNumberValue("mode", this.mode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Plugintype>("plugintypeid", this.plugintypeid);
        writer.writeNumberValue("rank", this.rank);
        writer.writeStringValue("runtimeintegrationproperties", this.runtimeintegrationproperties);
        writer.writeObjectValue<Sdkmessagefilter>("sdkmessagefilterid", this.sdkmessagefilterid);
        writer.writeObjectValue<Sdkmessage>("sdkmessageid", this.sdkmessageid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("sdkMessageProcessingStep_AsyncOperations", this.sdkMessageProcessingStep_AsyncOperations);
        writer.writeStringValue("sdkmessageprocessingstepid", this.sdkmessageprocessingstepid);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstepimage>("sdkmessageprocessingstepid_sdkmessageprocessingstepimage", this.sdkmessageprocessingstepid_sdkmessageprocessingstepimage);
        writer.writeStringValue("sdkmessageprocessingstepidunique", this.sdkmessageprocessingstepidunique);
        writer.writeObjectValue<Sdkmessageprocessingstepsecureconfig>("sdkmessageprocessingstepsecureconfigid", this.sdkmessageprocessingstepsecureconfigid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("stage", this.stage);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("supporteddeployment", this.supporteddeployment);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the stage property value. 
     * @returns a integer
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Sets the stage property value. 
     * @param value Value to set for the stage property.
     */
    public set stage(value: number | undefined) {
        this._stage = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the supporteddeployment property value. 
     * @returns a integer
     */
    public get supporteddeployment() {
        return this._supporteddeployment;
    };
    /**
     * Sets the supporteddeployment property value. 
     * @param value Value to set for the supporteddeployment property.
     */
    public set supporteddeployment(value: number | undefined) {
        this._supporteddeployment = value;
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
