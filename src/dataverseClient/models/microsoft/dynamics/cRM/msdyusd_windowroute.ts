import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_agentscriptactionFromDiscriminatorValue} from './createMsdyusd_agentscriptactionFromDiscriminatorValue';
import {createMsdyusd_configurationFromDiscriminatorValue} from './createMsdyusd_configurationFromDiscriminatorValue';
import {createMsdyusd_entityassignmentFromDiscriminatorValue} from './createMsdyusd_entityassignmentFromDiscriminatorValue';
import {createMsdyusd_entitysearchFromDiscriminatorValue} from './createMsdyusd_entitysearchFromDiscriminatorValue';
import {createMsdyusd_searchFromDiscriminatorValue} from './createMsdyusd_searchFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUii_hostedapplicationFromDiscriminatorValue} from './createUii_hostedapplicationFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyusd_agentscriptaction, Msdyusd_configuration, Msdyusd_entityassignment, Msdyusd_entitysearch, Msdyusd_search, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Uii_hostedapplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_windowroute extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyusd_application_value?: string | undefined;
    private __msdyusd_applicationaction_value?: string | undefined;
    private __msdyusd_entity_value?: string | undefined;
    private __msdyusd_entitysearch_value?: string | undefined;
    private __msdyusd_from_value?: string | undefined;
    private __msdyusd_fromsearch_value?: string | undefined;
    private __msdyusd_initiatingactivity_value?: string | undefined;
    private __msdyusd_multiplematches_value?: string | undefined;
    private __msdyusd_nomatchesaction_value?: string | undefined;
    private __msdyusd_showtab_value?: string | undefined;
    private __msdyusd_singlematchaction_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyusd_action?: number | undefined;
    private _msdyusd_Application?: Uii_hostedapplication | undefined;
    private _msdyusd_ApplicationAction?: Msdyusd_agentscriptaction | undefined;
    private _msdyusd_condition?: string | undefined;
    private _msdyusd_configuration_windowroute?: Msdyusd_configuration[] | undefined;
    private _msdyusd_dashboardframe?: string | undefined;
    private _msdyusd_destination?: number | undefined;
    private _msdyusd_direction?: number | undefined;
    private _msdyusd_Entity?: Msdyusd_entityassignment | undefined;
    private _msdyusd_EntitySearch?: Msdyusd_entitysearch | undefined;
    private _msdyusd_field?: string | undefined;
    private _msdyusd_From?: Uii_hostedapplication | undefined;
    private _msdyusd_FromSearch?: Msdyusd_entitysearch | undefined;
    private _msdyusd_hidenavbar?: boolean | undefined;
    private _msdyusd_hideribbon?: boolean | undefined;
    private _msdyusd_InitiatingActivity?: Msdyusd_entityassignment | undefined;
    private _msdyusd_loadarea?: string | undefined;
    private _msdyusd_MultipleMatches?: Msdyusd_agentscriptaction | undefined;
    private _msdyusd_multiplematchesdecision?: number | undefined;
    private _msdyusd_name?: string | undefined;
    private _msdyusd_nomatchdecision?: number | undefined;
    private _msdyusd_NoMatchesAction?: Msdyusd_agentscriptaction | undefined;
    private _msdyusd_order?: number | undefined;
    private _msdyusd_routetype?: number | undefined;
    private _msdyusd_showtab?: Uii_hostedapplication | undefined;
    private _msdyusd_SingleMatchAction?: Msdyusd_agentscriptaction | undefined;
    private _msdyusd_singlematchdecision?: number | undefined;
    private _msdyusd_sourceframe?: string | undefined;
    private _msdyusd_url?: string | undefined;
    private _msdyusd_windowroute_agentscriptaction?: Msdyusd_agentscriptaction[] | undefined;
    private _msdyusd_windowroute_Annotations?: Annotation[] | undefined;
    private _msdyusd_windowroute_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_windowroute_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_windowroute_ctisearch?: Msdyusd_search[] | undefined;
    private _msdyusd_windowroute_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_windowroute_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_windowroute_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_windowroute_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_windowrouteid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _msdyusd_application_value property value. 
     * @returns a string
     */
    public get _msdyusd_application_value() {
        return this.__msdyusd_application_value;
    };
    /**
     * Sets the _msdyusd_application_value property value. 
     * @param value Value to set for the _msdyusd_application_value property.
     */
    public set _msdyusd_application_value(value: string | undefined) {
        this.__msdyusd_application_value = value;
    };
    /**
     * Gets the _msdyusd_applicationaction_value property value. 
     * @returns a string
     */
    public get _msdyusd_applicationaction_value() {
        return this.__msdyusd_applicationaction_value;
    };
    /**
     * Sets the _msdyusd_applicationaction_value property value. 
     * @param value Value to set for the _msdyusd_applicationaction_value property.
     */
    public set _msdyusd_applicationaction_value(value: string | undefined) {
        this.__msdyusd_applicationaction_value = value;
    };
    /**
     * Gets the _msdyusd_entity_value property value. 
     * @returns a string
     */
    public get _msdyusd_entity_value() {
        return this.__msdyusd_entity_value;
    };
    /**
     * Sets the _msdyusd_entity_value property value. 
     * @param value Value to set for the _msdyusd_entity_value property.
     */
    public set _msdyusd_entity_value(value: string | undefined) {
        this.__msdyusd_entity_value = value;
    };
    /**
     * Gets the _msdyusd_entitysearch_value property value. 
     * @returns a string
     */
    public get _msdyusd_entitysearch_value() {
        return this.__msdyusd_entitysearch_value;
    };
    /**
     * Sets the _msdyusd_entitysearch_value property value. 
     * @param value Value to set for the _msdyusd_entitysearch_value property.
     */
    public set _msdyusd_entitysearch_value(value: string | undefined) {
        this.__msdyusd_entitysearch_value = value;
    };
    /**
     * Gets the _msdyusd_from_value property value. 
     * @returns a string
     */
    public get _msdyusd_from_value() {
        return this.__msdyusd_from_value;
    };
    /**
     * Sets the _msdyusd_from_value property value. 
     * @param value Value to set for the _msdyusd_from_value property.
     */
    public set _msdyusd_from_value(value: string | undefined) {
        this.__msdyusd_from_value = value;
    };
    /**
     * Gets the _msdyusd_fromsearch_value property value. 
     * @returns a string
     */
    public get _msdyusd_fromsearch_value() {
        return this.__msdyusd_fromsearch_value;
    };
    /**
     * Sets the _msdyusd_fromsearch_value property value. 
     * @param value Value to set for the _msdyusd_fromsearch_value property.
     */
    public set _msdyusd_fromsearch_value(value: string | undefined) {
        this.__msdyusd_fromsearch_value = value;
    };
    /**
     * Gets the _msdyusd_initiatingactivity_value property value. 
     * @returns a string
     */
    public get _msdyusd_initiatingactivity_value() {
        return this.__msdyusd_initiatingactivity_value;
    };
    /**
     * Sets the _msdyusd_initiatingactivity_value property value. 
     * @param value Value to set for the _msdyusd_initiatingactivity_value property.
     */
    public set _msdyusd_initiatingactivity_value(value: string | undefined) {
        this.__msdyusd_initiatingactivity_value = value;
    };
    /**
     * Gets the _msdyusd_multiplematches_value property value. 
     * @returns a string
     */
    public get _msdyusd_multiplematches_value() {
        return this.__msdyusd_multiplematches_value;
    };
    /**
     * Sets the _msdyusd_multiplematches_value property value. 
     * @param value Value to set for the _msdyusd_multiplematches_value property.
     */
    public set _msdyusd_multiplematches_value(value: string | undefined) {
        this.__msdyusd_multiplematches_value = value;
    };
    /**
     * Gets the _msdyusd_nomatchesaction_value property value. 
     * @returns a string
     */
    public get _msdyusd_nomatchesaction_value() {
        return this.__msdyusd_nomatchesaction_value;
    };
    /**
     * Sets the _msdyusd_nomatchesaction_value property value. 
     * @param value Value to set for the _msdyusd_nomatchesaction_value property.
     */
    public set _msdyusd_nomatchesaction_value(value: string | undefined) {
        this.__msdyusd_nomatchesaction_value = value;
    };
    /**
     * Gets the _msdyusd_showtab_value property value. 
     * @returns a string
     */
    public get _msdyusd_showtab_value() {
        return this.__msdyusd_showtab_value;
    };
    /**
     * Sets the _msdyusd_showtab_value property value. 
     * @param value Value to set for the _msdyusd_showtab_value property.
     */
    public set _msdyusd_showtab_value(value: string | undefined) {
        this.__msdyusd_showtab_value = value;
    };
    /**
     * Gets the _msdyusd_singlematchaction_value property value. 
     * @returns a string
     */
    public get _msdyusd_singlematchaction_value() {
        return this.__msdyusd_singlematchaction_value;
    };
    /**
     * Sets the _msdyusd_singlematchaction_value property value. 
     * @param value Value to set for the _msdyusd_singlematchaction_value property.
     */
    public set _msdyusd_singlematchaction_value(value: string | undefined) {
        this.__msdyusd_singlematchaction_value = value;
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
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyusd_windowroute and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyusd_application_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_application_value = n.getStringValue(); },
            "_msdyusd_applicationaction_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_applicationaction_value = n.getStringValue(); },
            "_msdyusd_entity_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_entity_value = n.getStringValue(); },
            "_msdyusd_entitysearch_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_entitysearch_value = n.getStringValue(); },
            "_msdyusd_from_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_from_value = n.getStringValue(); },
            "_msdyusd_fromsearch_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_fromsearch_value = n.getStringValue(); },
            "_msdyusd_initiatingactivity_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_initiatingactivity_value = n.getStringValue(); },
            "_msdyusd_multiplematches_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_multiplematches_value = n.getStringValue(); },
            "_msdyusd_nomatchesaction_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_nomatchesaction_value = n.getStringValue(); },
            "_msdyusd_showtab_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_showtab_value = n.getStringValue(); },
            "_msdyusd_singlematchaction_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._msdyusd_singlematchaction_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_windowroute)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_windowroute).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_windowroute).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_windowroute).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_windowroute).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_windowroute).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_windowroute).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_windowroute).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_action": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_action = n.getNumberValue(); },
            "msdyusd_Application": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_Application = n.getObjectValue<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "msdyusd_ApplicationAction": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_ApplicationAction = n.getObjectValue<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_condition": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_condition = n.getStringValue(); },
            "msdyusd_configuration_windowroute": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_configuration_windowroute = n.getCollectionOfObjectValues<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "msdyusd_dashboardframe": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_dashboardframe = n.getStringValue(); },
            "msdyusd_destination": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_destination = n.getNumberValue(); },
            "msdyusd_direction": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_direction = n.getNumberValue(); },
            "msdyusd_Entity": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_Entity = n.getObjectValue<Msdyusd_entityassignment>(createMsdyusd_entityassignmentFromDiscriminatorValue); },
            "msdyusd_EntitySearch": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_EntitySearch = n.getObjectValue<Msdyusd_entitysearch>(createMsdyusd_entitysearchFromDiscriminatorValue); },
            "msdyusd_field": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_field = n.getStringValue(); },
            "msdyusd_From": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_From = n.getObjectValue<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "msdyusd_FromSearch": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_FromSearch = n.getObjectValue<Msdyusd_entitysearch>(createMsdyusd_entitysearchFromDiscriminatorValue); },
            "msdyusd_hidenavbar": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_hidenavbar = n.getBooleanValue(); },
            "msdyusd_hideribbon": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_hideribbon = n.getBooleanValue(); },
            "msdyusd_InitiatingActivity": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_InitiatingActivity = n.getObjectValue<Msdyusd_entityassignment>(createMsdyusd_entityassignmentFromDiscriminatorValue); },
            "msdyusd_loadarea": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_loadarea = n.getStringValue(); },
            "msdyusd_MultipleMatches": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_MultipleMatches = n.getObjectValue<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_multiplematchesdecision": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_multiplematchesdecision = n.getNumberValue(); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_name = n.getStringValue(); },
            "msdyusd_nomatchdecision": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_nomatchdecision = n.getNumberValue(); },
            "msdyusd_NoMatchesAction": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_NoMatchesAction = n.getObjectValue<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_order": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_order = n.getNumberValue(); },
            "msdyusd_routetype": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_routetype = n.getNumberValue(); },
            "msdyusd_showtab": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_showtab = n.getObjectValue<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "msdyusd_SingleMatchAction": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_SingleMatchAction = n.getObjectValue<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_singlematchdecision": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_singlematchdecision = n.getNumberValue(); },
            "msdyusd_sourceframe": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_sourceframe = n.getStringValue(); },
            "msdyusd_url": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_url = n.getStringValue(); },
            "msdyusd_windowroute_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_windowroute_Annotations": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyusd_windowroute_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_windowroute_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_windowroute_ctisearch": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_ctisearch = n.getCollectionOfObjectValues<Msdyusd_search>(createMsdyusd_searchFromDiscriminatorValue); },
            "msdyusd_windowroute_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_windowroute_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_windowroute_ProcessSession": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_windowroute_SyncErrors": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowroute_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_windowrouteid": (o, n) => { (o as unknown as Msdyusd_windowroute).msdyusd_windowrouteid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_windowroute).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_windowroute).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_windowroute).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_windowroute).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_windowroute).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_windowroute).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_windowroute).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_windowroute).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_windowroute).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_windowroute).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyusd_action property value. 
     * @returns a integer
     */
    public get msdyusd_action() {
        return this._msdyusd_action;
    };
    /**
     * Sets the msdyusd_action property value. 
     * @param value Value to set for the msdyusd_action property.
     */
    public set msdyusd_action(value: number | undefined) {
        this._msdyusd_action = value;
    };
    /**
     * Gets the msdyusd_Application property value. 
     * @returns a uii_hostedapplication
     */
    public get msdyusd_Application() {
        return this._msdyusd_Application;
    };
    /**
     * Sets the msdyusd_Application property value. 
     * @param value Value to set for the msdyusd_Application property.
     */
    public set msdyusd_Application(value: Uii_hostedapplication | undefined) {
        this._msdyusd_Application = value;
    };
    /**
     * Gets the msdyusd_ApplicationAction property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_ApplicationAction() {
        return this._msdyusd_ApplicationAction;
    };
    /**
     * Sets the msdyusd_ApplicationAction property value. 
     * @param value Value to set for the msdyusd_ApplicationAction property.
     */
    public set msdyusd_ApplicationAction(value: Msdyusd_agentscriptaction | undefined) {
        this._msdyusd_ApplicationAction = value;
    };
    /**
     * Gets the msdyusd_condition property value. 
     * @returns a string
     */
    public get msdyusd_condition() {
        return this._msdyusd_condition;
    };
    /**
     * Sets the msdyusd_condition property value. 
     * @param value Value to set for the msdyusd_condition property.
     */
    public set msdyusd_condition(value: string | undefined) {
        this._msdyusd_condition = value;
    };
    /**
     * Gets the msdyusd_configuration_windowroute property value. 
     * @returns a msdyusd_configuration
     */
    public get msdyusd_configuration_windowroute() {
        return this._msdyusd_configuration_windowroute;
    };
    /**
     * Sets the msdyusd_configuration_windowroute property value. 
     * @param value Value to set for the msdyusd_configuration_windowroute property.
     */
    public set msdyusd_configuration_windowroute(value: Msdyusd_configuration[] | undefined) {
        this._msdyusd_configuration_windowroute = value;
    };
    /**
     * Gets the msdyusd_dashboardframe property value. 
     * @returns a string
     */
    public get msdyusd_dashboardframe() {
        return this._msdyusd_dashboardframe;
    };
    /**
     * Sets the msdyusd_dashboardframe property value. 
     * @param value Value to set for the msdyusd_dashboardframe property.
     */
    public set msdyusd_dashboardframe(value: string | undefined) {
        this._msdyusd_dashboardframe = value;
    };
    /**
     * Gets the msdyusd_destination property value. 
     * @returns a integer
     */
    public get msdyusd_destination() {
        return this._msdyusd_destination;
    };
    /**
     * Sets the msdyusd_destination property value. 
     * @param value Value to set for the msdyusd_destination property.
     */
    public set msdyusd_destination(value: number | undefined) {
        this._msdyusd_destination = value;
    };
    /**
     * Gets the msdyusd_direction property value. 
     * @returns a integer
     */
    public get msdyusd_direction() {
        return this._msdyusd_direction;
    };
    /**
     * Sets the msdyusd_direction property value. 
     * @param value Value to set for the msdyusd_direction property.
     */
    public set msdyusd_direction(value: number | undefined) {
        this._msdyusd_direction = value;
    };
    /**
     * Gets the msdyusd_Entity property value. 
     * @returns a msdyusd_entityassignment
     */
    public get msdyusd_Entity() {
        return this._msdyusd_Entity;
    };
    /**
     * Sets the msdyusd_Entity property value. 
     * @param value Value to set for the msdyusd_Entity property.
     */
    public set msdyusd_Entity(value: Msdyusd_entityassignment | undefined) {
        this._msdyusd_Entity = value;
    };
    /**
     * Gets the msdyusd_EntitySearch property value. 
     * @returns a msdyusd_entitysearch
     */
    public get msdyusd_EntitySearch() {
        return this._msdyusd_EntitySearch;
    };
    /**
     * Sets the msdyusd_EntitySearch property value. 
     * @param value Value to set for the msdyusd_EntitySearch property.
     */
    public set msdyusd_EntitySearch(value: Msdyusd_entitysearch | undefined) {
        this._msdyusd_EntitySearch = value;
    };
    /**
     * Gets the msdyusd_field property value. 
     * @returns a string
     */
    public get msdyusd_field() {
        return this._msdyusd_field;
    };
    /**
     * Sets the msdyusd_field property value. 
     * @param value Value to set for the msdyusd_field property.
     */
    public set msdyusd_field(value: string | undefined) {
        this._msdyusd_field = value;
    };
    /**
     * Gets the msdyusd_From property value. 
     * @returns a uii_hostedapplication
     */
    public get msdyusd_From() {
        return this._msdyusd_From;
    };
    /**
     * Sets the msdyusd_From property value. 
     * @param value Value to set for the msdyusd_From property.
     */
    public set msdyusd_From(value: Uii_hostedapplication | undefined) {
        this._msdyusd_From = value;
    };
    /**
     * Gets the msdyusd_FromSearch property value. 
     * @returns a msdyusd_entitysearch
     */
    public get msdyusd_FromSearch() {
        return this._msdyusd_FromSearch;
    };
    /**
     * Sets the msdyusd_FromSearch property value. 
     * @param value Value to set for the msdyusd_FromSearch property.
     */
    public set msdyusd_FromSearch(value: Msdyusd_entitysearch | undefined) {
        this._msdyusd_FromSearch = value;
    };
    /**
     * Gets the msdyusd_hidenavbar property value. 
     * @returns a boolean
     */
    public get msdyusd_hidenavbar() {
        return this._msdyusd_hidenavbar;
    };
    /**
     * Sets the msdyusd_hidenavbar property value. 
     * @param value Value to set for the msdyusd_hidenavbar property.
     */
    public set msdyusd_hidenavbar(value: boolean | undefined) {
        this._msdyusd_hidenavbar = value;
    };
    /**
     * Gets the msdyusd_hideribbon property value. 
     * @returns a boolean
     */
    public get msdyusd_hideribbon() {
        return this._msdyusd_hideribbon;
    };
    /**
     * Sets the msdyusd_hideribbon property value. 
     * @param value Value to set for the msdyusd_hideribbon property.
     */
    public set msdyusd_hideribbon(value: boolean | undefined) {
        this._msdyusd_hideribbon = value;
    };
    /**
     * Gets the msdyusd_InitiatingActivity property value. 
     * @returns a msdyusd_entityassignment
     */
    public get msdyusd_InitiatingActivity() {
        return this._msdyusd_InitiatingActivity;
    };
    /**
     * Sets the msdyusd_InitiatingActivity property value. 
     * @param value Value to set for the msdyusd_InitiatingActivity property.
     */
    public set msdyusd_InitiatingActivity(value: Msdyusd_entityassignment | undefined) {
        this._msdyusd_InitiatingActivity = value;
    };
    /**
     * Gets the msdyusd_loadarea property value. 
     * @returns a string
     */
    public get msdyusd_loadarea() {
        return this._msdyusd_loadarea;
    };
    /**
     * Sets the msdyusd_loadarea property value. 
     * @param value Value to set for the msdyusd_loadarea property.
     */
    public set msdyusd_loadarea(value: string | undefined) {
        this._msdyusd_loadarea = value;
    };
    /**
     * Gets the msdyusd_MultipleMatches property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_MultipleMatches() {
        return this._msdyusd_MultipleMatches;
    };
    /**
     * Sets the msdyusd_MultipleMatches property value. 
     * @param value Value to set for the msdyusd_MultipleMatches property.
     */
    public set msdyusd_MultipleMatches(value: Msdyusd_agentscriptaction | undefined) {
        this._msdyusd_MultipleMatches = value;
    };
    /**
     * Gets the msdyusd_multiplematchesdecision property value. 
     * @returns a integer
     */
    public get msdyusd_multiplematchesdecision() {
        return this._msdyusd_multiplematchesdecision;
    };
    /**
     * Sets the msdyusd_multiplematchesdecision property value. 
     * @param value Value to set for the msdyusd_multiplematchesdecision property.
     */
    public set msdyusd_multiplematchesdecision(value: number | undefined) {
        this._msdyusd_multiplematchesdecision = value;
    };
    /**
     * Gets the msdyusd_name property value. 
     * @returns a string
     */
    public get msdyusd_name() {
        return this._msdyusd_name;
    };
    /**
     * Sets the msdyusd_name property value. 
     * @param value Value to set for the msdyusd_name property.
     */
    public set msdyusd_name(value: string | undefined) {
        this._msdyusd_name = value;
    };
    /**
     * Gets the msdyusd_nomatchdecision property value. 
     * @returns a integer
     */
    public get msdyusd_nomatchdecision() {
        return this._msdyusd_nomatchdecision;
    };
    /**
     * Sets the msdyusd_nomatchdecision property value. 
     * @param value Value to set for the msdyusd_nomatchdecision property.
     */
    public set msdyusd_nomatchdecision(value: number | undefined) {
        this._msdyusd_nomatchdecision = value;
    };
    /**
     * Gets the msdyusd_NoMatchesAction property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_NoMatchesAction() {
        return this._msdyusd_NoMatchesAction;
    };
    /**
     * Sets the msdyusd_NoMatchesAction property value. 
     * @param value Value to set for the msdyusd_NoMatchesAction property.
     */
    public set msdyusd_NoMatchesAction(value: Msdyusd_agentscriptaction | undefined) {
        this._msdyusd_NoMatchesAction = value;
    };
    /**
     * Gets the msdyusd_order property value. 
     * @returns a integer
     */
    public get msdyusd_order() {
        return this._msdyusd_order;
    };
    /**
     * Sets the msdyusd_order property value. 
     * @param value Value to set for the msdyusd_order property.
     */
    public set msdyusd_order(value: number | undefined) {
        this._msdyusd_order = value;
    };
    /**
     * Gets the msdyusd_routetype property value. 
     * @returns a integer
     */
    public get msdyusd_routetype() {
        return this._msdyusd_routetype;
    };
    /**
     * Sets the msdyusd_routetype property value. 
     * @param value Value to set for the msdyusd_routetype property.
     */
    public set msdyusd_routetype(value: number | undefined) {
        this._msdyusd_routetype = value;
    };
    /**
     * Gets the msdyusd_showtab property value. 
     * @returns a uii_hostedapplication
     */
    public get msdyusd_showtab() {
        return this._msdyusd_showtab;
    };
    /**
     * Sets the msdyusd_showtab property value. 
     * @param value Value to set for the msdyusd_showtab property.
     */
    public set msdyusd_showtab(value: Uii_hostedapplication | undefined) {
        this._msdyusd_showtab = value;
    };
    /**
     * Gets the msdyusd_SingleMatchAction property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_SingleMatchAction() {
        return this._msdyusd_SingleMatchAction;
    };
    /**
     * Sets the msdyusd_SingleMatchAction property value. 
     * @param value Value to set for the msdyusd_SingleMatchAction property.
     */
    public set msdyusd_SingleMatchAction(value: Msdyusd_agentscriptaction | undefined) {
        this._msdyusd_SingleMatchAction = value;
    };
    /**
     * Gets the msdyusd_singlematchdecision property value. 
     * @returns a integer
     */
    public get msdyusd_singlematchdecision() {
        return this._msdyusd_singlematchdecision;
    };
    /**
     * Sets the msdyusd_singlematchdecision property value. 
     * @param value Value to set for the msdyusd_singlematchdecision property.
     */
    public set msdyusd_singlematchdecision(value: number | undefined) {
        this._msdyusd_singlematchdecision = value;
    };
    /**
     * Gets the msdyusd_sourceframe property value. 
     * @returns a string
     */
    public get msdyusd_sourceframe() {
        return this._msdyusd_sourceframe;
    };
    /**
     * Sets the msdyusd_sourceframe property value. 
     * @param value Value to set for the msdyusd_sourceframe property.
     */
    public set msdyusd_sourceframe(value: string | undefined) {
        this._msdyusd_sourceframe = value;
    };
    /**
     * Gets the msdyusd_url property value. 
     * @returns a string
     */
    public get msdyusd_url() {
        return this._msdyusd_url;
    };
    /**
     * Sets the msdyusd_url property value. 
     * @param value Value to set for the msdyusd_url property.
     */
    public set msdyusd_url(value: string | undefined) {
        this._msdyusd_url = value;
    };
    /**
     * Gets the msdyusd_windowroute_agentscriptaction property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_windowroute_agentscriptaction() {
        return this._msdyusd_windowroute_agentscriptaction;
    };
    /**
     * Sets the msdyusd_windowroute_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_windowroute_agentscriptaction property.
     */
    public set msdyusd_windowroute_agentscriptaction(value: Msdyusd_agentscriptaction[] | undefined) {
        this._msdyusd_windowroute_agentscriptaction = value;
    };
    /**
     * Gets the msdyusd_windowroute_Annotations property value. 
     * @returns a annotation
     */
    public get msdyusd_windowroute_Annotations() {
        return this._msdyusd_windowroute_Annotations;
    };
    /**
     * Sets the msdyusd_windowroute_Annotations property value. 
     * @param value Value to set for the msdyusd_windowroute_Annotations property.
     */
    public set msdyusd_windowroute_Annotations(value: Annotation[] | undefined) {
        this._msdyusd_windowroute_Annotations = value;
    };
    /**
     * Gets the msdyusd_windowroute_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_windowroute_AsyncOperations() {
        return this._msdyusd_windowroute_AsyncOperations;
    };
    /**
     * Sets the msdyusd_windowroute_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_windowroute_AsyncOperations property.
     */
    public set msdyusd_windowroute_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_windowroute_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_windowroute_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_windowroute_BulkDeleteFailures() {
        return this._msdyusd_windowroute_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_windowroute_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_windowroute_BulkDeleteFailures property.
     */
    public set msdyusd_windowroute_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_windowroute_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_windowroute_ctisearch property value. 
     * @returns a msdyusd_search
     */
    public get msdyusd_windowroute_ctisearch() {
        return this._msdyusd_windowroute_ctisearch;
    };
    /**
     * Sets the msdyusd_windowroute_ctisearch property value. 
     * @param value Value to set for the msdyusd_windowroute_ctisearch property.
     */
    public set msdyusd_windowroute_ctisearch(value: Msdyusd_search[] | undefined) {
        this._msdyusd_windowroute_ctisearch = value;
    };
    /**
     * Gets the msdyusd_windowroute_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_windowroute_MailboxTrackingFolders() {
        return this._msdyusd_windowroute_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_windowroute_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_windowroute_MailboxTrackingFolders property.
     */
    public set msdyusd_windowroute_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_windowroute_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_windowroute_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_windowroute_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_windowroute_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_windowroute_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_windowroute_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_windowroute_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_windowroute_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_windowroute_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_windowroute_ProcessSession() {
        return this._msdyusd_windowroute_ProcessSession;
    };
    /**
     * Sets the msdyusd_windowroute_ProcessSession property value. 
     * @param value Value to set for the msdyusd_windowroute_ProcessSession property.
     */
    public set msdyusd_windowroute_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_windowroute_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_windowroute_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_windowroute_SyncErrors() {
        return this._msdyusd_windowroute_SyncErrors;
    };
    /**
     * Sets the msdyusd_windowroute_SyncErrors property value. 
     * @param value Value to set for the msdyusd_windowroute_SyncErrors property.
     */
    public set msdyusd_windowroute_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_windowroute_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_windowrouteid property value. 
     * @returns a string
     */
    public get msdyusd_windowrouteid() {
        return this._msdyusd_windowrouteid;
    };
    /**
     * Sets the msdyusd_windowrouteid property value. 
     * @param value Value to set for the msdyusd_windowrouteid property.
     */
    public set msdyusd_windowrouteid(value: string | undefined) {
        this._msdyusd_windowrouteid = value;
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
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyusd_application_value", this._msdyusd_application_value);
        writer.writeStringValue("_msdyusd_applicationaction_value", this._msdyusd_applicationaction_value);
        writer.writeStringValue("_msdyusd_entity_value", this._msdyusd_entity_value);
        writer.writeStringValue("_msdyusd_entitysearch_value", this._msdyusd_entitysearch_value);
        writer.writeStringValue("_msdyusd_from_value", this._msdyusd_from_value);
        writer.writeStringValue("_msdyusd_fromsearch_value", this._msdyusd_fromsearch_value);
        writer.writeStringValue("_msdyusd_initiatingactivity_value", this._msdyusd_initiatingactivity_value);
        writer.writeStringValue("_msdyusd_multiplematches_value", this._msdyusd_multiplematches_value);
        writer.writeStringValue("_msdyusd_nomatchesaction_value", this._msdyusd_nomatchesaction_value);
        writer.writeStringValue("_msdyusd_showtab_value", this._msdyusd_showtab_value);
        writer.writeStringValue("_msdyusd_singlematchaction_value", this._msdyusd_singlematchaction_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyusd_action", this.msdyusd_action);
        writer.writeObjectValue<Uii_hostedapplication>("msdyusd_Application", this.msdyusd_Application);
        writer.writeObjectValue<Msdyusd_agentscriptaction>("msdyusd_ApplicationAction", this.msdyusd_ApplicationAction);
        writer.writeStringValue("msdyusd_condition", this.msdyusd_condition);
        writer.writeCollectionOfObjectValues<Msdyusd_configuration>("msdyusd_configuration_windowroute", this.msdyusd_configuration_windowroute);
        writer.writeStringValue("msdyusd_dashboardframe", this.msdyusd_dashboardframe);
        writer.writeNumberValue("msdyusd_destination", this.msdyusd_destination);
        writer.writeNumberValue("msdyusd_direction", this.msdyusd_direction);
        writer.writeObjectValue<Msdyusd_entityassignment>("msdyusd_Entity", this.msdyusd_Entity);
        writer.writeObjectValue<Msdyusd_entitysearch>("msdyusd_EntitySearch", this.msdyusd_EntitySearch);
        writer.writeStringValue("msdyusd_field", this.msdyusd_field);
        writer.writeObjectValue<Uii_hostedapplication>("msdyusd_From", this.msdyusd_From);
        writer.writeObjectValue<Msdyusd_entitysearch>("msdyusd_FromSearch", this.msdyusd_FromSearch);
        writer.writeBooleanValue("msdyusd_hidenavbar", this.msdyusd_hidenavbar);
        writer.writeBooleanValue("msdyusd_hideribbon", this.msdyusd_hideribbon);
        writer.writeObjectValue<Msdyusd_entityassignment>("msdyusd_InitiatingActivity", this.msdyusd_InitiatingActivity);
        writer.writeStringValue("msdyusd_loadarea", this.msdyusd_loadarea);
        writer.writeObjectValue<Msdyusd_agentscriptaction>("msdyusd_MultipleMatches", this.msdyusd_MultipleMatches);
        writer.writeNumberValue("msdyusd_multiplematchesdecision", this.msdyusd_multiplematchesdecision);
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
        writer.writeNumberValue("msdyusd_nomatchdecision", this.msdyusd_nomatchdecision);
        writer.writeObjectValue<Msdyusd_agentscriptaction>("msdyusd_NoMatchesAction", this.msdyusd_NoMatchesAction);
        writer.writeNumberValue("msdyusd_order", this.msdyusd_order);
        writer.writeNumberValue("msdyusd_routetype", this.msdyusd_routetype);
        writer.writeObjectValue<Uii_hostedapplication>("msdyusd_showtab", this.msdyusd_showtab);
        writer.writeObjectValue<Msdyusd_agentscriptaction>("msdyusd_SingleMatchAction", this.msdyusd_SingleMatchAction);
        writer.writeNumberValue("msdyusd_singlematchdecision", this.msdyusd_singlematchdecision);
        writer.writeStringValue("msdyusd_sourceframe", this.msdyusd_sourceframe);
        writer.writeStringValue("msdyusd_url", this.msdyusd_url);
        writer.writeCollectionOfObjectValues<Msdyusd_agentscriptaction>("msdyusd_windowroute_agentscriptaction", this.msdyusd_windowroute_agentscriptaction);
        writer.writeCollectionOfObjectValues<Annotation>("msdyusd_windowroute_Annotations", this.msdyusd_windowroute_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_windowroute_AsyncOperations", this.msdyusd_windowroute_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_windowroute_BulkDeleteFailures", this.msdyusd_windowroute_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Msdyusd_search>("msdyusd_windowroute_ctisearch", this.msdyusd_windowroute_ctisearch);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_windowroute_MailboxTrackingFolders", this.msdyusd_windowroute_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_windowroute_PrincipalObjectAttributeAccesses", this.msdyusd_windowroute_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_windowroute_ProcessSession", this.msdyusd_windowroute_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_windowroute_SyncErrors", this.msdyusd_windowroute_SyncErrors);
        writer.writeStringValue("msdyusd_windowrouteid", this.msdyusd_windowrouteid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
