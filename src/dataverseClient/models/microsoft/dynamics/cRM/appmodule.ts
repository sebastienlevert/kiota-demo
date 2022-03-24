import {createAppactionFromDiscriminatorValue} from './createAppactionFromDiscriminatorValue';
import {createAppconfigFromDiscriminatorValue} from './createAppconfigFromDiscriminatorValue';
import {createAppmodulecomponentFromDiscriminatorValue} from './createAppmodulecomponentFromDiscriminatorValue';
import {createAppnotificationFromDiscriminatorValue} from './createAppnotificationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPublisherFromDiscriminatorValue} from './createPublisherFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {createServiceplanFromDiscriminatorValue} from './createServiceplanFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appaction, Appconfig, Appmodulecomponent, Appnotification, Crmbaseentity, Organization, Publisher, Role, Serviceplan, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appmodule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __publisherid_value?: string | undefined;
    private _appmodule_appaction_appmoduleid?: Appaction[] | undefined;
    private _appmodule_appconfig?: Appconfig[] | undefined;
    private _appmodule_appmodulecomponent?: Appmodulecomponent[] | undefined;
    private _appmodule_appnotification_app?: Appnotification[] | undefined;
    private _appmodule_createdby?: Systemuser | undefined;
    private _appmodule_createdonbehalfby?: Systemuser | undefined;
    private _appmodule_modifiedby?: Systemuser | undefined;
    private _appmodule_modifiedonbehalfby?: Systemuser | undefined;
    private _appmoduleid?: string | undefined;
    private _appmoduleidunique?: string | undefined;
    private _appmoduleroles_association?: Role[] | undefined;
    private _appmoduleversion?: string | undefined;
    private _appmodulexmlmanaged?: string | undefined;
    private _clienttype?: number | undefined;
    private _componentstate?: number | undefined;
    private _configxml?: string | undefined;
    private _createdon?: Date | undefined;
    private _description?: string | undefined;
    private _descriptor?: string | undefined;
    private _eventhandlers?: string | undefined;
    private _formfactor?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _isdefault?: boolean | undefined;
    private _isfeatured?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _name?: string | undefined;
    private _navigationtype?: number | undefined;
    private _optimizedfor?: string | undefined;
    private _organization_appmodule_appmodule?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _publishedon?: Date | undefined;
    private _publisher_appmodule_appmodule?: Publisher | undefined;
    private _serviceplan_appmodule_association?: Serviceplan[] | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _uniquename?: string | undefined;
    private _url?: string | undefined;
    private _versionnumber?: number | undefined;
    private _webresourceid?: string | undefined;
    private _welcomepageid?: string | undefined;
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
     * Gets the _publisherid_value property value. 
     * @returns a string
     */
    public get _publisherid_value() {
        return this.__publisherid_value;
    };
    /**
     * Sets the _publisherid_value property value. 
     * @param value Value to set for the _publisherid_value property.
     */
    public set _publisherid_value(value: string | undefined) {
        this.__publisherid_value = value;
    };
    /**
     * Gets the appmodule_appaction_appmoduleid property value. 
     * @returns a appaction
     */
    public get appmodule_appaction_appmoduleid() {
        return this._appmodule_appaction_appmoduleid;
    };
    /**
     * Sets the appmodule_appaction_appmoduleid property value. 
     * @param value Value to set for the appmodule_appaction_appmoduleid property.
     */
    public set appmodule_appaction_appmoduleid(value: Appaction[] | undefined) {
        this._appmodule_appaction_appmoduleid = value;
    };
    /**
     * Gets the appmodule_appconfig property value. 
     * @returns a appconfig
     */
    public get appmodule_appconfig() {
        return this._appmodule_appconfig;
    };
    /**
     * Sets the appmodule_appconfig property value. 
     * @param value Value to set for the appmodule_appconfig property.
     */
    public set appmodule_appconfig(value: Appconfig[] | undefined) {
        this._appmodule_appconfig = value;
    };
    /**
     * Gets the appmodule_appmodulecomponent property value. 
     * @returns a appmodulecomponent
     */
    public get appmodule_appmodulecomponent() {
        return this._appmodule_appmodulecomponent;
    };
    /**
     * Sets the appmodule_appmodulecomponent property value. 
     * @param value Value to set for the appmodule_appmodulecomponent property.
     */
    public set appmodule_appmodulecomponent(value: Appmodulecomponent[] | undefined) {
        this._appmodule_appmodulecomponent = value;
    };
    /**
     * Gets the appmodule_appnotification_app property value. 
     * @returns a appnotification
     */
    public get appmodule_appnotification_app() {
        return this._appmodule_appnotification_app;
    };
    /**
     * Sets the appmodule_appnotification_app property value. 
     * @param value Value to set for the appmodule_appnotification_app property.
     */
    public set appmodule_appnotification_app(value: Appnotification[] | undefined) {
        this._appmodule_appnotification_app = value;
    };
    /**
     * Gets the appmodule_createdby property value. 
     * @returns a systemuser
     */
    public get appmodule_createdby() {
        return this._appmodule_createdby;
    };
    /**
     * Sets the appmodule_createdby property value. 
     * @param value Value to set for the appmodule_createdby property.
     */
    public set appmodule_createdby(value: Systemuser | undefined) {
        this._appmodule_createdby = value;
    };
    /**
     * Gets the appmodule_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get appmodule_createdonbehalfby() {
        return this._appmodule_createdonbehalfby;
    };
    /**
     * Sets the appmodule_createdonbehalfby property value. 
     * @param value Value to set for the appmodule_createdonbehalfby property.
     */
    public set appmodule_createdonbehalfby(value: Systemuser | undefined) {
        this._appmodule_createdonbehalfby = value;
    };
    /**
     * Gets the appmodule_modifiedby property value. 
     * @returns a systemuser
     */
    public get appmodule_modifiedby() {
        return this._appmodule_modifiedby;
    };
    /**
     * Sets the appmodule_modifiedby property value. 
     * @param value Value to set for the appmodule_modifiedby property.
     */
    public set appmodule_modifiedby(value: Systemuser | undefined) {
        this._appmodule_modifiedby = value;
    };
    /**
     * Gets the appmodule_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get appmodule_modifiedonbehalfby() {
        return this._appmodule_modifiedonbehalfby;
    };
    /**
     * Sets the appmodule_modifiedonbehalfby property value. 
     * @param value Value to set for the appmodule_modifiedonbehalfby property.
     */
    public set appmodule_modifiedonbehalfby(value: Systemuser | undefined) {
        this._appmodule_modifiedonbehalfby = value;
    };
    /**
     * Gets the appmoduleid property value. 
     * @returns a string
     */
    public get appmoduleid() {
        return this._appmoduleid;
    };
    /**
     * Sets the appmoduleid property value. 
     * @param value Value to set for the appmoduleid property.
     */
    public set appmoduleid(value: string | undefined) {
        this._appmoduleid = value;
    };
    /**
     * Gets the appmoduleidunique property value. 
     * @returns a string
     */
    public get appmoduleidunique() {
        return this._appmoduleidunique;
    };
    /**
     * Sets the appmoduleidunique property value. 
     * @param value Value to set for the appmoduleidunique property.
     */
    public set appmoduleidunique(value: string | undefined) {
        this._appmoduleidunique = value;
    };
    /**
     * Gets the appmoduleroles_association property value. 
     * @returns a role
     */
    public get appmoduleroles_association() {
        return this._appmoduleroles_association;
    };
    /**
     * Sets the appmoduleroles_association property value. 
     * @param value Value to set for the appmoduleroles_association property.
     */
    public set appmoduleroles_association(value: Role[] | undefined) {
        this._appmoduleroles_association = value;
    };
    /**
     * Gets the appmoduleversion property value. 
     * @returns a string
     */
    public get appmoduleversion() {
        return this._appmoduleversion;
    };
    /**
     * Sets the appmoduleversion property value. 
     * @param value Value to set for the appmoduleversion property.
     */
    public set appmoduleversion(value: string | undefined) {
        this._appmoduleversion = value;
    };
    /**
     * Gets the appmodulexmlmanaged property value. 
     * @returns a string
     */
    public get appmodulexmlmanaged() {
        return this._appmodulexmlmanaged;
    };
    /**
     * Sets the appmodulexmlmanaged property value. 
     * @param value Value to set for the appmodulexmlmanaged property.
     */
    public set appmodulexmlmanaged(value: string | undefined) {
        this._appmodulexmlmanaged = value;
    };
    /**
     * Gets the clienttype property value. 
     * @returns a integer
     */
    public get clienttype() {
        return this._clienttype;
    };
    /**
     * Sets the clienttype property value. 
     * @param value Value to set for the clienttype property.
     */
    public set clienttype(value: number | undefined) {
        this._clienttype = value;
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
     * Gets the configxml property value. 
     * @returns a string
     */
    public get configxml() {
        return this._configxml;
    };
    /**
     * Sets the configxml property value. 
     * @param value Value to set for the configxml property.
     */
    public set configxml(value: string | undefined) {
        this._configxml = value;
    };
    /**
     * Instantiates a new appmodule and sets the default values.
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
     * Gets the descriptor property value. 
     * @returns a string
     */
    public get descriptor() {
        return this._descriptor;
    };
    /**
     * Sets the descriptor property value. 
     * @param value Value to set for the descriptor property.
     */
    public set descriptor(value: string | undefined) {
        this._descriptor = value;
    };
    /**
     * Gets the eventhandlers property value. 
     * @returns a string
     */
    public get eventhandlers() {
        return this._eventhandlers;
    };
    /**
     * Sets the eventhandlers property value. 
     * @param value Value to set for the eventhandlers property.
     */
    public set eventhandlers(value: string | undefined) {
        this._eventhandlers = value;
    };
    /**
     * Gets the formfactor property value. 
     * @returns a integer
     */
    public get formfactor() {
        return this._formfactor;
    };
    /**
     * Sets the formfactor property value. 
     * @param value Value to set for the formfactor property.
     */
    public set formfactor(value: number | undefined) {
        this._formfactor = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Appmodule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appmodule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appmodule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appmodule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Appmodule)._organizationid_value = n.getStringValue(); },
            "_publisherid_value": (o, n) => { (o as unknown as Appmodule)._publisherid_value = n.getStringValue(); },
            "appmodule_appaction_appmoduleid": (o, n) => { (o as unknown as Appmodule).appmodule_appaction_appmoduleid = n.getCollectionOfObjectValues<Appaction>(createAppactionFromDiscriminatorValue); },
            "appmodule_appconfig": (o, n) => { (o as unknown as Appmodule).appmodule_appconfig = n.getCollectionOfObjectValues<Appconfig>(createAppconfigFromDiscriminatorValue); },
            "appmodule_appmodulecomponent": (o, n) => { (o as unknown as Appmodule).appmodule_appmodulecomponent = n.getCollectionOfObjectValues<Appmodulecomponent>(createAppmodulecomponentFromDiscriminatorValue); },
            "appmodule_appnotification_app": (o, n) => { (o as unknown as Appmodule).appmodule_appnotification_app = n.getCollectionOfObjectValues<Appnotification>(createAppnotificationFromDiscriminatorValue); },
            "appmodule_createdby": (o, n) => { (o as unknown as Appmodule).appmodule_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appmodule_createdonbehalfby": (o, n) => { (o as unknown as Appmodule).appmodule_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appmodule_modifiedby": (o, n) => { (o as unknown as Appmodule).appmodule_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appmodule_modifiedonbehalfby": (o, n) => { (o as unknown as Appmodule).appmodule_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appmoduleid": (o, n) => { (o as unknown as Appmodule).appmoduleid = n.getStringValue(); },
            "appmoduleidunique": (o, n) => { (o as unknown as Appmodule).appmoduleidunique = n.getStringValue(); },
            "appmoduleroles_association": (o, n) => { (o as unknown as Appmodule).appmoduleroles_association = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "appmoduleversion": (o, n) => { (o as unknown as Appmodule).appmoduleversion = n.getStringValue(); },
            "appmodulexmlmanaged": (o, n) => { (o as unknown as Appmodule).appmodulexmlmanaged = n.getStringValue(); },
            "clienttype": (o, n) => { (o as unknown as Appmodule).clienttype = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Appmodule).componentstate = n.getNumberValue(); },
            "configxml": (o, n) => { (o as unknown as Appmodule).configxml = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Appmodule).createdon = n.getDateValue(); },
            "description": (o, n) => { (o as unknown as Appmodule).description = n.getStringValue(); },
            "descriptor": (o, n) => { (o as unknown as Appmodule).descriptor = n.getStringValue(); },
            "eventhandlers": (o, n) => { (o as unknown as Appmodule).eventhandlers = n.getStringValue(); },
            "formfactor": (o, n) => { (o as unknown as Appmodule).formfactor = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Appmodule).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Appmodule).introducedversion = n.getStringValue(); },
            "isdefault": (o, n) => { (o as unknown as Appmodule).isdefault = n.getBooleanValue(); },
            "isfeatured": (o, n) => { (o as unknown as Appmodule).isfeatured = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Appmodule).ismanaged = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Appmodule).modifiedon = n.getDateValue(); },
            "name": (o, n) => { (o as unknown as Appmodule).name = n.getStringValue(); },
            "navigationtype": (o, n) => { (o as unknown as Appmodule).navigationtype = n.getNumberValue(); },
            "optimizedfor": (o, n) => { (o as unknown as Appmodule).optimizedfor = n.getStringValue(); },
            "organization_appmodule_appmodule": (o, n) => { (o as unknown as Appmodule).organization_appmodule_appmodule = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Appmodule).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Appmodule).overwritetime = n.getDateValue(); },
            "publishedon": (o, n) => { (o as unknown as Appmodule).publishedon = n.getDateValue(); },
            "publisher_appmodule_appmodule": (o, n) => { (o as unknown as Appmodule).publisher_appmodule_appmodule = n.getObjectValue<Publisher>(createPublisherFromDiscriminatorValue); },
            "serviceplan_appmodule_association": (o, n) => { (o as unknown as Appmodule).serviceplan_appmodule_association = n.getCollectionOfObjectValues<Serviceplan>(createServiceplanFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Appmodule).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Appmodule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Appmodule).statuscode = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Appmodule).uniquename = n.getStringValue(); },
            "url": (o, n) => { (o as unknown as Appmodule).url = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appmodule).versionnumber = n.getNumberValue(); },
            "webresourceid": (o, n) => { (o as unknown as Appmodule).webresourceid = n.getStringValue(); },
            "welcomepageid": (o, n) => { (o as unknown as Appmodule).welcomepageid = n.getStringValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the isdefault property value. 
     * @returns a boolean
     */
    public get isdefault() {
        return this._isdefault;
    };
    /**
     * Sets the isdefault property value. 
     * @param value Value to set for the isdefault property.
     */
    public set isdefault(value: boolean | undefined) {
        this._isdefault = value;
    };
    /**
     * Gets the isfeatured property value. 
     * @returns a boolean
     */
    public get isfeatured() {
        return this._isfeatured;
    };
    /**
     * Sets the isfeatured property value. 
     * @param value Value to set for the isfeatured property.
     */
    public set isfeatured(value: boolean | undefined) {
        this._isfeatured = value;
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
     * Gets the navigationtype property value. 
     * @returns a integer
     */
    public get navigationtype() {
        return this._navigationtype;
    };
    /**
     * Sets the navigationtype property value. 
     * @param value Value to set for the navigationtype property.
     */
    public set navigationtype(value: number | undefined) {
        this._navigationtype = value;
    };
    /**
     * Gets the optimizedfor property value. 
     * @returns a string
     */
    public get optimizedfor() {
        return this._optimizedfor;
    };
    /**
     * Sets the optimizedfor property value. 
     * @param value Value to set for the optimizedfor property.
     */
    public set optimizedfor(value: string | undefined) {
        this._optimizedfor = value;
    };
    /**
     * Gets the organization_appmodule_appmodule property value. 
     * @returns a organization
     */
    public get organization_appmodule_appmodule() {
        return this._organization_appmodule_appmodule;
    };
    /**
     * Sets the organization_appmodule_appmodule property value. 
     * @param value Value to set for the organization_appmodule_appmodule property.
     */
    public set organization_appmodule_appmodule(value: Organization | undefined) {
        this._organization_appmodule_appmodule = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
     * Gets the publishedon property value. 
     * @returns a Date
     */
    public get publishedon() {
        return this._publishedon;
    };
    /**
     * Sets the publishedon property value. 
     * @param value Value to set for the publishedon property.
     */
    public set publishedon(value: Date | undefined) {
        this._publishedon = value;
    };
    /**
     * Gets the publisher_appmodule_appmodule property value. 
     * @returns a publisher
     */
    public get publisher_appmodule_appmodule() {
        return this._publisher_appmodule_appmodule;
    };
    /**
     * Sets the publisher_appmodule_appmodule property value. 
     * @param value Value to set for the publisher_appmodule_appmodule property.
     */
    public set publisher_appmodule_appmodule(value: Publisher | undefined) {
        this._publisher_appmodule_appmodule = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_publisherid_value", this._publisherid_value);
        writer.writeCollectionOfObjectValues<Appaction>("appmodule_appaction_appmoduleid", this.appmodule_appaction_appmoduleid);
        writer.writeCollectionOfObjectValues<Appconfig>("appmodule_appconfig", this.appmodule_appconfig);
        writer.writeCollectionOfObjectValues<Appmodulecomponent>("appmodule_appmodulecomponent", this.appmodule_appmodulecomponent);
        writer.writeCollectionOfObjectValues<Appnotification>("appmodule_appnotification_app", this.appmodule_appnotification_app);
        writer.writeObjectValue<Systemuser>("appmodule_createdby", this.appmodule_createdby);
        writer.writeObjectValue<Systemuser>("appmodule_createdonbehalfby", this.appmodule_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("appmodule_modifiedby", this.appmodule_modifiedby);
        writer.writeObjectValue<Systemuser>("appmodule_modifiedonbehalfby", this.appmodule_modifiedonbehalfby);
        writer.writeStringValue("appmoduleid", this.appmoduleid);
        writer.writeStringValue("appmoduleidunique", this.appmoduleidunique);
        writer.writeCollectionOfObjectValues<Role>("appmoduleroles_association", this.appmoduleroles_association);
        writer.writeStringValue("appmoduleversion", this.appmoduleversion);
        writer.writeStringValue("appmodulexmlmanaged", this.appmodulexmlmanaged);
        writer.writeNumberValue("clienttype", this.clienttype);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("configxml", this.configxml);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("descriptor", this.descriptor);
        writer.writeStringValue("eventhandlers", this.eventhandlers);
        writer.writeNumberValue("formfactor", this.formfactor);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeBooleanValue("isfeatured", this.isfeatured);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("navigationtype", this.navigationtype);
        writer.writeStringValue("optimizedfor", this.optimizedfor);
        writer.writeObjectValue<Organization>("organization_appmodule_appmodule", this.organization_appmodule_appmodule);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeDateValue("publishedon", this.publishedon);
        writer.writeObjectValue<Publisher>("publisher_appmodule_appmodule", this.publisher_appmodule_appmodule);
        writer.writeCollectionOfObjectValues<Serviceplan>("serviceplan_appmodule_association", this.serviceplan_appmodule_association);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeStringValue("url", this.url);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("webresourceid", this.webresourceid);
        writer.writeStringValue("welcomepageid", this.welcomepageid);
    };
    /**
     * Gets the serviceplan_appmodule_association property value. 
     * @returns a serviceplan
     */
    public get serviceplan_appmodule_association() {
        return this._serviceplan_appmodule_association;
    };
    /**
     * Sets the serviceplan_appmodule_association property value. 
     * @param value Value to set for the serviceplan_appmodule_association property.
     */
    public set serviceplan_appmodule_association(value: Serviceplan[] | undefined) {
        this._serviceplan_appmodule_association = value;
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
    /**
     * Gets the webresourceid property value. 
     * @returns a string
     */
    public get webresourceid() {
        return this._webresourceid;
    };
    /**
     * Sets the webresourceid property value. 
     * @param value Value to set for the webresourceid property.
     */
    public set webresourceid(value: string | undefined) {
        this._webresourceid = value;
    };
    /**
     * Gets the welcomepageid property value. 
     * @returns a string
     */
    public get welcomepageid() {
        return this._welcomepageid;
    };
    /**
     * Sets the welcomepageid property value. 
     * @param value Value to set for the welcomepageid property.
     */
    public set welcomepageid(value: string | undefined) {
        this._welcomepageid = value;
    };
}
