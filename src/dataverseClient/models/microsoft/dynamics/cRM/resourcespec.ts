import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConstraintbasedgroupFromDiscriminatorValue} from './createConstraintbasedgroupFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createResourceFromDiscriminatorValue} from './createResourceFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activityparty, Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Constraintbasedgroup, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Resource, Service, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Resourcespec extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _activityPartyResourceSpec?: Activityparty[] | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _constraints?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _effortrequired?: number | undefined;
    private _groupobjectid?: string | undefined;
    private _groupobjectid_constraintbasedgroup?: Constraintbasedgroup | undefined;
    private _groupobjectid_team?: Team | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _objectiveexpression?: string | undefined;
    private _objecttypecode?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _requiredcount?: number | undefined;
    private _resource_spec_services?: Service[] | undefined;
    private _resourceSpec_Annotation?: Annotation[] | undefined;
    private _resourceSpec_AsyncOperations?: Asyncoperation[] | undefined;
    private _resourceSpec_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _resourcespec_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _resourcespec_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _resourcespec_resources?: Resource[] | undefined;
    private _resourcespec_SyncErrors?: Syncerror[] | undefined;
    private _resourcespecid?: string | undefined;
    private _samesite?: boolean | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _businessunitid_value property value. 
     * @returns a string
     */
    public get _businessunitid_value() {
        return this.__businessunitid_value;
    };
    /**
     * Sets the _businessunitid_value property value. 
     * @param value Value to set for the _businessunitid_value property.
     */
    public set _businessunitid_value(value: string | undefined) {
        this.__businessunitid_value = value;
    };
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
     * Gets the activityPartyResourceSpec property value. 
     * @returns a activityparty
     */
    public get activityPartyResourceSpec() {
        return this._activityPartyResourceSpec;
    };
    /**
     * Sets the activityPartyResourceSpec property value. 
     * @param value Value to set for the ActivityPartyResourceSpec property.
     */
    public set activityPartyResourceSpec(value: Activityparty[] | undefined) {
        this._activityPartyResourceSpec = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a businessunit
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: Businessunit | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the constraints property value. 
     * @returns a string
     */
    public get constraints() {
        return this._constraints;
    };
    /**
     * Sets the constraints property value. 
     * @param value Value to set for the constraints property.
     */
    public set constraints(value: string | undefined) {
        this._constraints = value;
    };
    /**
     * Instantiates a new resourcespec and sets the default values.
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
     * Gets the effortrequired property value. 
     * @returns a double
     */
    public get effortrequired() {
        return this._effortrequired;
    };
    /**
     * Sets the effortrequired property value. 
     * @param value Value to set for the effortrequired property.
     */
    public set effortrequired(value: number | undefined) {
        this._effortrequired = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Resourcespec)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Resourcespec)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Resourcespec)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Resourcespec)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Resourcespec)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Resourcespec)._organizationid_value = n.getStringValue(); },
            "activityPartyResourceSpec": (o, n) => { (o as unknown as Resourcespec).activityPartyResourceSpec = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "businessunitid": (o, n) => { (o as unknown as Resourcespec).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "constraints": (o, n) => { (o as unknown as Resourcespec).constraints = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Resourcespec).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Resourcespec).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Resourcespec).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Resourcespec).description = n.getStringValue(); },
            "effortrequired": (o, n) => { (o as unknown as Resourcespec).effortrequired = n.getNumberValue(); },
            "groupobjectid": (o, n) => { (o as unknown as Resourcespec).groupobjectid = n.getStringValue(); },
            "groupobjectid_constraintbasedgroup": (o, n) => { (o as unknown as Resourcespec).groupobjectid_constraintbasedgroup = n.getObjectValue<Constraintbasedgroup>(createConstraintbasedgroupFromDiscriminatorValue); },
            "groupobjectid_team": (o, n) => { (o as unknown as Resourcespec).groupobjectid_team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Resourcespec).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Resourcespec).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Resourcespec).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Resourcespec).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Resourcespec).name = n.getStringValue(); },
            "objectiveexpression": (o, n) => { (o as unknown as Resourcespec).objectiveexpression = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Resourcespec).objecttypecode = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Resourcespec).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Resourcespec).overriddencreatedon = n.getDateValue(); },
            "requiredcount": (o, n) => { (o as unknown as Resourcespec).requiredcount = n.getNumberValue(); },
            "resource_spec_services": (o, n) => { (o as unknown as Resourcespec).resource_spec_services = n.getCollectionOfObjectValues<Service>(createServiceFromDiscriminatorValue); },
            "resourceSpec_Annotation": (o, n) => { (o as unknown as Resourcespec).resourceSpec_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "resourceSpec_AsyncOperations": (o, n) => { (o as unknown as Resourcespec).resourceSpec_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "resourceSpec_BulkDeleteFailures": (o, n) => { (o as unknown as Resourcespec).resourceSpec_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "resourcespec_MailboxTrackingFolders": (o, n) => { (o as unknown as Resourcespec).resourcespec_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "resourcespec_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Resourcespec).resourcespec_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "resourcespec_resources": (o, n) => { (o as unknown as Resourcespec).resourcespec_resources = n.getCollectionOfObjectValues<Resource>(createResourceFromDiscriminatorValue); },
            "resourcespec_SyncErrors": (o, n) => { (o as unknown as Resourcespec).resourcespec_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "resourcespecid": (o, n) => { (o as unknown as Resourcespec).resourcespecid = n.getStringValue(); },
            "samesite": (o, n) => { (o as unknown as Resourcespec).samesite = n.getBooleanValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Resourcespec).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Resourcespec).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Resourcespec).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the groupobjectid property value. 
     * @returns a string
     */
    public get groupobjectid() {
        return this._groupobjectid;
    };
    /**
     * Sets the groupobjectid property value. 
     * @param value Value to set for the groupobjectid property.
     */
    public set groupobjectid(value: string | undefined) {
        this._groupobjectid = value;
    };
    /**
     * Gets the groupobjectid_constraintbasedgroup property value. 
     * @returns a constraintbasedgroup
     */
    public get groupobjectid_constraintbasedgroup() {
        return this._groupobjectid_constraintbasedgroup;
    };
    /**
     * Sets the groupobjectid_constraintbasedgroup property value. 
     * @param value Value to set for the groupobjectid_constraintbasedgroup property.
     */
    public set groupobjectid_constraintbasedgroup(value: Constraintbasedgroup | undefined) {
        this._groupobjectid_constraintbasedgroup = value;
    };
    /**
     * Gets the groupobjectid_team property value. 
     * @returns a team
     */
    public get groupobjectid_team() {
        return this._groupobjectid_team;
    };
    /**
     * Sets the groupobjectid_team property value. 
     * @param value Value to set for the groupobjectid_team property.
     */
    public set groupobjectid_team(value: Team | undefined) {
        this._groupobjectid_team = value;
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
     * Gets the objectiveexpression property value. 
     * @returns a string
     */
    public get objectiveexpression() {
        return this._objectiveexpression;
    };
    /**
     * Sets the objectiveexpression property value. 
     * @param value Value to set for the objectiveexpression property.
     */
    public set objectiveexpression(value: string | undefined) {
        this._objectiveexpression = value;
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
     * Gets the requiredcount property value. 
     * @returns a integer
     */
    public get requiredcount() {
        return this._requiredcount;
    };
    /**
     * Sets the requiredcount property value. 
     * @param value Value to set for the requiredcount property.
     */
    public set requiredcount(value: number | undefined) {
        this._requiredcount = value;
    };
    /**
     * Gets the resource_spec_services property value. 
     * @returns a service
     */
    public get resource_spec_services() {
        return this._resource_spec_services;
    };
    /**
     * Sets the resource_spec_services property value. 
     * @param value Value to set for the resource_spec_services property.
     */
    public set resource_spec_services(value: Service[] | undefined) {
        this._resource_spec_services = value;
    };
    /**
     * Gets the resourceSpec_Annotation property value. 
     * @returns a annotation
     */
    public get resourceSpec_Annotation() {
        return this._resourceSpec_Annotation;
    };
    /**
     * Sets the resourceSpec_Annotation property value. 
     * @param value Value to set for the ResourceSpec_Annotation property.
     */
    public set resourceSpec_Annotation(value: Annotation[] | undefined) {
        this._resourceSpec_Annotation = value;
    };
    /**
     * Gets the resourceSpec_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get resourceSpec_AsyncOperations() {
        return this._resourceSpec_AsyncOperations;
    };
    /**
     * Sets the resourceSpec_AsyncOperations property value. 
     * @param value Value to set for the ResourceSpec_AsyncOperations property.
     */
    public set resourceSpec_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._resourceSpec_AsyncOperations = value;
    };
    /**
     * Gets the resourceSpec_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get resourceSpec_BulkDeleteFailures() {
        return this._resourceSpec_BulkDeleteFailures;
    };
    /**
     * Sets the resourceSpec_BulkDeleteFailures property value. 
     * @param value Value to set for the ResourceSpec_BulkDeleteFailures property.
     */
    public set resourceSpec_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._resourceSpec_BulkDeleteFailures = value;
    };
    /**
     * Gets the resourcespec_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get resourcespec_MailboxTrackingFolders() {
        return this._resourcespec_MailboxTrackingFolders;
    };
    /**
     * Sets the resourcespec_MailboxTrackingFolders property value. 
     * @param value Value to set for the resourcespec_MailboxTrackingFolders property.
     */
    public set resourcespec_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._resourcespec_MailboxTrackingFolders = value;
    };
    /**
     * Gets the resourcespec_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get resourcespec_PrincipalObjectAttributeAccesses() {
        return this._resourcespec_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the resourcespec_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the resourcespec_PrincipalObjectAttributeAccesses property.
     */
    public set resourcespec_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._resourcespec_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the resourcespec_resources property value. 
     * @returns a resource
     */
    public get resourcespec_resources() {
        return this._resourcespec_resources;
    };
    /**
     * Sets the resourcespec_resources property value. 
     * @param value Value to set for the resourcespec_resources property.
     */
    public set resourcespec_resources(value: Resource[] | undefined) {
        this._resourcespec_resources = value;
    };
    /**
     * Gets the resourcespec_SyncErrors property value. 
     * @returns a syncerror
     */
    public get resourcespec_SyncErrors() {
        return this._resourcespec_SyncErrors;
    };
    /**
     * Sets the resourcespec_SyncErrors property value. 
     * @param value Value to set for the resourcespec_SyncErrors property.
     */
    public set resourcespec_SyncErrors(value: Syncerror[] | undefined) {
        this._resourcespec_SyncErrors = value;
    };
    /**
     * Gets the resourcespecid property value. 
     * @returns a string
     */
    public get resourcespecid() {
        return this._resourcespecid;
    };
    /**
     * Sets the resourcespecid property value. 
     * @param value Value to set for the resourcespecid property.
     */
    public set resourcespecid(value: string | undefined) {
        this._resourcespecid = value;
    };
    /**
     * Gets the samesite property value. 
     * @returns a boolean
     */
    public get samesite() {
        return this._samesite;
    };
    /**
     * Sets the samesite property value. 
     * @param value Value to set for the samesite property.
     */
    public set samesite(value: boolean | undefined) {
        this._samesite = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeCollectionOfObjectValues<Activityparty>("activityPartyResourceSpec", this.activityPartyResourceSpec);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeStringValue("constraints", this.constraints);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("effortrequired", this.effortrequired);
        writer.writeStringValue("groupobjectid", this.groupobjectid);
        writer.writeObjectValue<Constraintbasedgroup>("groupobjectid_constraintbasedgroup", this.groupobjectid_constraintbasedgroup);
        writer.writeObjectValue<Team>("groupobjectid_team", this.groupobjectid_team);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objectiveexpression", this.objectiveexpression);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("requiredcount", this.requiredcount);
        writer.writeCollectionOfObjectValues<Service>("resource_spec_services", this.resource_spec_services);
        writer.writeCollectionOfObjectValues<Annotation>("resourceSpec_Annotation", this.resourceSpec_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("resourceSpec_AsyncOperations", this.resourceSpec_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("resourceSpec_BulkDeleteFailures", this.resourceSpec_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("resourcespec_MailboxTrackingFolders", this.resourcespec_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("resourcespec_PrincipalObjectAttributeAccesses", this.resourcespec_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Resource>("resourcespec_resources", this.resourcespec_resources);
        writer.writeCollectionOfObjectValues<Syncerror>("resourcespec_SyncErrors", this.resourcespec_SyncErrors);
        writer.writeStringValue("resourcespecid", this.resourcespecid);
        writer.writeBooleanValue("samesite", this.samesite);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
